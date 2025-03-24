// Function to dynamically load Navbar and Footer
async function loadComponent(componentId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        const html = await response.text();
        document.getElementById(componentId).innerHTML = html;
    } catch (error) {
        console.error("Error loading component:", error);
    }
}

// Load Navbar and Footer on page load
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("navbar", "../../components/nav-bar.html"); // Load Navbar
  loadComponent("footer", "../../components/footer.html"); // Load Footer
  // Load Footer
});
