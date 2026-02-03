const themeToggle = document.querySelector("[data-theme-toggle]");
const preferredTheme = localStorage.getItem("theme");

if (preferredTheme) {
  document.documentElement.setAttribute("data-theme", preferredTheme);
}

const updateToggleLabel = (theme) => {
  if (!themeToggle) {
    return;
  }

  themeToggle.textContent = theme === "dark" ? "Switch to light" : "Switch to dark";
};

updateToggleLabel(preferredTheme || "light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateToggleLabel(next);
  });
}
