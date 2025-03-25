// Function to dynamically load Navbar and Footer
async function loadComponent(componentId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await response.text();
    document.getElementById(componentId).innerHTML = html;

    // Reattach event listeners after loading the navbar
    if (componentId === "navbar") {
      attachNavbarListeners();
    }
  } catch (error) {
    console.error("Error loading component:", error);
  }
}

// Function to attach event listeners to the navbar
function attachNavbarListeners() {
  const menuToggle = document.getElementById("menu-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");

  if (menuToggle && dropdownMenu) {
    menuToggle.addEventListener("click", () => {
      console.log("Hamburger menu clicked");
      dropdownMenu.classList.toggle("hidden");
    });
  }
}

// Load Navbar and Footer on page load
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("navbar", "../../components/nav-bar.html"); // Load Navbar
  loadComponent("footer", "../../components/footer.html"); // Load Footer
});
