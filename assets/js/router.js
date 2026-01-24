// assets/js/router.js
import { TOOL_REGISTRY } from "./registry.js";
import { pushPage, popPage } from "./stack.js";

const titleEl = document.getElementById("title");
document.getElementById("btnBack").onclick = popPage;

export async function navigate(id) {
  const tool = TOOL_REGISTRY.find(t => t.id === id);

  const page = document.createElement("section");
  page.className = "page";

  if (!tool) {
    page.innerHTML = `<p style="padding:16px">❌ 找不到頁面：${id}</p>`;
    pushPage(page);
    return;
  }

  try {
    const view = await tool.view();
    view.render(page);
    titleEl.textContent = tool.name;
  } catch (err) {
    page.innerHTML = `
      <div style="padding:16px;color:red">
        <h3>載入失敗</h3>
        <pre>${err.message}</pre>
      </div>
    `;
  }

  pushPage(page);
}

// 🔒 永遠保證有首頁
window.addEventListener("DOMContentLoaded", () => {
  navigate("dashboard");
});