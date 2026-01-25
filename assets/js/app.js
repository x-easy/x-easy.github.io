/* ===============================
   App Loader（安全、不會白畫面）
   =============================== */

/* 工具：載入 HTML 片段 */
async function loadHTML(targetId, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(targetId).innerHTML = html;
}

/* 啟動流程（順序很重要） */
(async function boot() {

  // 載入固定結構
  await loadHTML('app-header', 'layout/header.html');
  await loadHTML('app-bottom', 'layout/bottom-nav.html');

  // 載入主內容
  await loadHTML('app-content', 'components/feature-slider.html');
  await loadHTML('app-content', 'components/service-slider.html');

})();