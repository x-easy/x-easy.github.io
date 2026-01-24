// assets/js/registry.js
export const TOOL_REGISTRY = [
  {
    id: "dashboard",
    name: "儀表板",
    icon: "📊",
    view: () => import("./views/dashboard.js")
  },
  {
    id: "music",
    name: "背景音樂",
    icon: "🎵",
    view: () => import("./views/music.js")
  },
  {
    id: "settings",
    name: "設定",
    icon: "⚙️",
    view: () => import("./views/settings.js")
  }
];