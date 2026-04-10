// Student Portal Demo — minimal JS
// Not required for cascade learning, but helps with simple UI toggles.

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const helpBtn = $("#helpBtn");
const helpPanel = $("#helpPanel");
const compactToggle = $("#compactToggle");
const filterButtons = $$(".btn--chip[data-filter]");

if (helpBtn && helpPanel) {
  helpBtn.addEventListener("click", () => {
    const isHidden = helpPanel.hasAttribute("hidden");
    if (isHidden) helpPanel.removeAttribute("hidden");
    else helpPanel.setAttribute("hidden", "");
  });
}

if (compactToggle) {
  compactToggle.addEventListener("change", () => {
    document.body.dataset.layout = compactToggle.checked ? "compact" : "normal";
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-pressed", "true");
  });
});
