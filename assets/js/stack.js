// assets/js/stack.js
const stack = document.getElementById("stack");
const pages = Array.from(stack.children);

export function pushPage(el) {
  el.style.zIndex = pages.length + 1;
  stack.appendChild(el);
  pages.push(el);

  requestAnimationFrame(() => {
    el.classList.add("active");
  });
}

export function popPage() {
  if (pages.length <= 1) return; // 👈 永遠保留一頁

  const page = pages.pop();
  page.classList.remove("active");
  page.addEventListener("transitionend", () => page.remove(), { once: true });
}