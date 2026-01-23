// /bin/build.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Handlebars from "handlebars";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist/web");

const md = new MarkdownIt({ html: true }).use(anchor);

/* ---------- 工具 ---------- */
const ensureDir = p => fs.mkdirSync(p, { recursive: true });
const read = p => fs.readFileSync(p, "utf-8");

/* ---------- 註冊 partials ---------- */
function registerPartials() {
  const partialDir = path.join(SRC, "tpl/partials");
  const files = fs.readdirSync(partialDir).filter(f => f.endsWith(".html"));

  files.forEach(file => {
    const name = path.basename(file, ".html");
    const content = read(path.join(partialDir, file));
    Handlebars.registerPartial(name, content);
  });
}

/* ---------- 載入 layout ---------- */
function loadLayout(name) {
  const layoutPath = path.join(SRC, "tpl/layouts", name);
  return Handlebars.compile(read(layoutPath));
}

/* ---------- build posts ---------- */
function buildPosts() {
  const postsDir = path.join(SRC, "content/posts");
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
  const render = loadLayout("post.html");

  files.forEach(file => {
    const raw = read(path.join(postsDir, file));
    const { data, content } = matter(raw);

    // 必要欄位檢查
    ["title", "slug", "date"].forEach(k => {
      if (!data[k]) throw new Error(`${file} 缺少必要欄位：${k}`);
    });

    const html = md.render(content);

    const context = {
      ...data,
      content_html: html,
      date_human: data.date // 之後可換 formatter
    };

    const outDir = path.join(DIST, "posts", data.slug);
    ensureDir(outDir);

    fs.writeFileSync(
      path.join(outDir, "index.html"),
      render(context)
    );
  });
}

/* ---------- 404 保底 ---------- */
function build404() {
  ensureDir(DIST);
  fs.writeFileSync(
    path.join(DIST, "404.html"),
    "<h1>404</h1><p>Page not found</p>"
  );
}

/* ---------- run ---------- */
ensureDir(DIST);
registerPartials();
buildPosts();
build404();

console.log("✔ Handlebars build complete");
