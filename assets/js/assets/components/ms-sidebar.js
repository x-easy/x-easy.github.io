// assets/components/ms-sidebar.js
import { TOOL_REGISTRY } from "../js/registry.js";
import { navigate } from "../js/router.js";

customElements.define("ms-sidebar", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        ${TOOL_REGISTRY.map(t =>
          `<button data-id="${t.id}">${t.icon} ${t.name}</button>`
        ).join("")}
      </nav>
    `;

    this.querySelectorAll("button").forEach(btn =>
      btn.onclick = () => navigate(btn.dataset.id)
    );
  }
});