(() => {
  const modal = document.getElementById('musicModal');
  const close = document.getElementById('closeModal');

  if (!modal || !close) return;

  close.onclick = () => modal.classList.remove('active');
})();