// ===== Sidebar Toggle =====
const btnSidebar = document.getElementById('btnSidebar');
const sidebar = document.getElementById('sidebar');

btnSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');

  // 記憶狀態（GitHub Pages 可用）
  localStorage.setItem(
    'sidebar',
    sidebar.classList.contains('collapsed') ? 'off' : 'on'
  );
});

// ===== 初始化狀態 =====
if (localStorage.getItem('sidebar') === 'off') {
  sidebar.classList.add('collapsed');
}