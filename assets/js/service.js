(() => {
  const open = document.getElementById('openService');
  const close = document.getElementById('closeService');
  const page = document.getElementById('servicePage');

  if (!open || !close || !page) return;

  open.onclick = () => page.classList.add('active');
  close.onclick = () => page.classList.remove('active');
})();