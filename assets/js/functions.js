document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const rootElement = document.documentElement;
  
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      rootElement.className = savedTheme;
    } else {
      rootElement.className = "light-theme"; // Default to light theme
    }
  
    themeToggle.addEventListener("click", () => {
      const currentTheme = rootElement.className;
      const newTheme = currentTheme === "light-theme" ? "dark-theme" : "light-theme";
  
      // Apply the new theme
      rootElement.className = newTheme;
  
      // Save the preference in localStorage
      localStorage.setItem("theme", newTheme);
    });
  });
  