// assets/js/stack.js
const stack = document.getElementById("stack");
const pages = [];

export function pushPage(el) {
  el.style.zIndex = pages.length + 1;
  el.classList.add("enter");
  stack.appendChild(el);
  pages.push(el);

  requestAnimationFrame(() => {
    el.classList.add("active");
  });
}

export function popPage() {
  if (pages.length <= 1) return;

  const page = pages.pop();
  page.classList.remove("active");
  page.addEventListener(
    "transitionend",
    () => page.remove(),
    { once: true }
  );
}