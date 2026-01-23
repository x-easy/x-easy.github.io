// /bin/build.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist/web");

const md = new MarkdownIt({ html: true }).use(anchor);

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function loadTemplate(name) {
  const p = path.join(SRC, "tpl/layouts", name);
  return fs.readFileSync(p, "utf-8");
}

function renderPost(template, data, contentHtml) {
  return template
    .replace("{{title}}", data.title)
    .replace("{{content}}", contentHtml);
}

function buildPosts() {
  const postsDir = path.join(SRC, "content/posts");
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
  const tpl = loadTemplate("post.html");

  files.forEach(file => {
    const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data, content } = matter(raw);

    if (!data.slug || !data.title || !data.date) {
      throw new Error(`缺少必要欄位：${file}`);
    }

    const html = md.render(content);
    const outDir = path.join(DIST, "posts", data.slug);
    ensureDir(outDir);

    const finalHtml = renderPost(tpl, data, html);
    fs.writeFileSync(path.join(outDir, "index.html"), finalHtml);
  });
}

function build404() {
  ensureDir(DIST);
  fs.writeFileSync(
    path.join(DIST, "404.html"),
    "<h1>404</h1><p>Page not found</p>"
  );
}

ensureDir(DIST);
buildPosts();
build404();

console.log("✔ build complete");
