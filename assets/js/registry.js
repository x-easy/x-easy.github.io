// assets/js/registry.js
export const TOOL_REGISTRY = [
  {
    id: "dashboard",
    name: "首頁",
    view: () => import("./views/dashboard.js")
  },
  {
    id: "music",
    name: "背景音樂",
    view: () => import("./views/music.js")
  },
  {
    id: "settings",
    name: "設定",
    view: () => import("./views/settings.js")
  }
];