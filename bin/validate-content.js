// /bin/validate-content.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS = path.join(process.cwd(), "src/content/posts");
const REQUIRED = ["title", "slug", "date", "description"];

let hasError = false;

fs.readdirSync(POSTS)
  .filter(f => f.endsWith(".md"))
  .forEach(file => {
    const raw = fs.readFileSync(path.join(POSTS, file), "utf-8");
    const { data } = matter(raw);

    REQUIRED.forEach(key => {
      if (!data[key]) {
        console.error(`✖ ${file} 缺少欄位：${key}`);
        hasError = true;
      }
    });
  });

if (hasError) {
  process.exit(1);
}

console.log("✔ content validation passed");
