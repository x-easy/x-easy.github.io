/* ===============================
   全站狀態（唯一來源）
   =============================== */
const state = {
  serviceModalOpen: false
};

/* ===============================
   DOM 快取（只抓一次）
   =============================== */
const serviceModal = document.getElementById("serviceModal");
const openServiceModalBtn = document.getElementById("openServiceModal");
const miniPlayer = document.getElementById("miniPlayer");

/* ===============================
   行為控制
   =============================== */

// 服務 modal 開關
openServiceModalBtn.addEventListener("click", () => {
  state.serviceModalOpen = true;
  serviceModal.classList.add("show");
});

// 點背景關閉 modal
serviceModal.addEventListener("click", (e) => {
  if (e.target === serviceModal) {
    state.serviceModalOpen = false;
    serviceModal.classList.remove("show");
  }
});

// 點擊 mini player（之後接播放器）
miniPlayer.addEventListener("click", () => {
  alert("播放器展開（下一步再做）");
});

/* ===============================
   初始化（防止空白）
   =============================== */
(function init() {
  // 保證 modal 初始為關閉
  serviceModal.classList.remove("show");
})();
