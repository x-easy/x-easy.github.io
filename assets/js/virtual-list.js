// assets/js/virtual-list.js
export function renderVirtualList(container, items, rowHeight = 40) {
  container.style.height = `${items.length * rowHeight}px`;
  container.onscroll = () => {
    const start = Math.floor(container.scrollTop / rowHeight);
    container.innerHTML = items.slice(start, start + 20)
      .map(i => `<div style="height:${rowHeight}px">${i}</div>`)
      .join("");
  };
}