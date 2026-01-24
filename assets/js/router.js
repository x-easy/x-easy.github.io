// assets/js/router.js
import { TOOL_REGISTRY } from "./registry.js";
import { pushPage, popPage } from "./stack.js";

const title = document.getElementById("title");
document.getElementById("btnBack").onclick = popPage;

export async function navigate(id) {
  const tool = TOOL_REGISTRY.find(t => t.id === id);
  if (!tool) return;

  const page = document.createElement("section");
  page.className = "page";

  const view = await tool.view();
  view.render(page);

  title.textContent = tool.name;
  pushPage(page);
}

// 初始頁
navigate("dashboard");