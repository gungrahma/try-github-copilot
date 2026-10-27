import "./style.css";

const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
const navigation = document.querySelector<HTMLElement>("#primary-navigation");
const navigationLinks = navigation?.querySelectorAll<HTMLAnchorElement>("a");

if (menuToggle && navigation) {
  const closeMenu = (): void => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
      "aria-label",
      isExpanded ? "Open navigation menu" : "Close navigation menu",
    );
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigationLinks?.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const currentYear = document.querySelector<HTMLElement>("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
