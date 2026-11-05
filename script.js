const header = document.querySelector(".masthead");
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("primary-nav");
const mobileNav = window.matchMedia("(max-width: 920px)");

function setMenu(open) {
  header.dataset.menuOpen = open ? "true" : "false";
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "Close" : "Menu";
}

toggle.addEventListener("click", () => {
  setMenu(header.dataset.menuOpen !== "true");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && header.dataset.menuOpen === "true") {
    setMenu(false);
    toggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (header.dataset.menuOpen === "true" && !header.contains(event.target)) {
    setMenu(false);
  }
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenu(false);
  }
});

mobileNav.addEventListener("change", (event) => {
  if (!event.matches) {
    setMenu(false);
  }
});

setMenu(false);
