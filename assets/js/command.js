// assets/js/command.js
import { TOOL_REGISTRY } from "./registry.js";
import { navigate } from "./router.js";

document.addEventListener("keydown", e => {
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    const name = prompt("輸入工具名稱");
    const tool = TOOL_REGISTRY.find(t => t.name.includes(name));
    if (tool) navigate(tool.id);
  }
});