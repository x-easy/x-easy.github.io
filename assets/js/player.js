(() => {
  const btn = document.getElementById('playBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    document.getElementById('musicModal')?.classList.add('active');
  });
})();