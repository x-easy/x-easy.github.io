// assets/components/ms-sidebar.js
import { TOOL_REGISTRY } from "../js/registry.js";
import { navigate } from "../js/router.js";

customElements.define("ms-sidebar", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <aside class="drawer">
        ${TOOL_REGISTRY.map(t =>
          `<button data-id="${t.id}">${t.name}</button>`
        ).join("")}
      </aside>
    `;

    this.querySelectorAll("button").forEach(b =>
      b.onclick = () => navigate(b.dataset.id)
    );
  }
});