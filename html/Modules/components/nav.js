// Function to dynamically load Navbar and Footer
async function loadComponent(componentId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await response.text();
    document.getElementById(componentId).innerHTML = html;

    if(componentId ==="navbar"){
      attachNavbarListeners();
    }
  } catch (error) {
    console.error("Error loading component:", error);
  }
}

function attachNavbarListeners() {
  const menuToggle = document.getElementById("menu-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");

  if(menuToggle&&dropdownMenu){
    menuToggle.addEventListener("click", () =>{
      console.log('Hamburger menu clicked');
      dropdownMenu.classList.toggle("hidden");
    });
  }
}
// Load Navbar and Footer when the page loads
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("navbar", "../components/nav-bar.html"); // Go up twice
  loadComponent("footer", "../components/footer.html"); // Go up twice
});
