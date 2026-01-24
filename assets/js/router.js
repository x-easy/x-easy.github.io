// assets/js/router.js
import { TOOL_REGISTRY } from "./registry.js";
import { pushPage, popPage } from "./stack.js";

const titleEl = document.getElementById("title");
const backBtn = document.getElementById("btnBack");

backBtn.onclick = () => popPage();

export async function navigate(id) {
  const tool = TOOL_REGISTRY.find(t => t.id === id);
  if (!tool) return;

  const page = document.createElement("section");
  page.className = "page";

  try {
    const view = await tool.view();
    view.render(page);
  } catch (e) {
    page.innerHTML = `<p style="padding:16px;color:red">載入失敗：${id}</p>`;
  }

  titleEl.textContent = tool.name;
  pushPage(page);
}

/* 🔑 關鍵修補：確保第一次一定執行 */
setTimeout(() => {
  navigate("dashboard");
}, 0);