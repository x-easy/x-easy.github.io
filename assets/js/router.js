// assets/js/router.js
import { TOOL_REGISTRY } from "./registry.js";
import { setState } from "./app.js";

export async function navigate(viewId) {
  const tool = TOOL_REGISTRY.find(t => t.id === viewId);
  if (!tool) return;

  const module = await tool.view();
  document.getElementById("app-view").innerHTML = "";
  module.render(document.getElementById("app-view"));

  setState({ currentView: viewId });
}