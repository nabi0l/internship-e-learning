// load-components.js

// Function to load HTML content into a specified element
function loadComponent(component, elementId) {
  fetch(component)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Load the nav-bar and footer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("components/nav-bar.html", "nav-bar");
  loadComponent("components/footer.html", "footer");
});
