function toggleModule(clickedModule) {
  const allModules = document.querySelectorAll(".module");

  allModules.forEach((module) => {
    const ul = module.querySelector("ul");
    const icon = module.querySelector("i");

    if (module === clickedModule) {
      // Toggle the clicked module's subcategories
      ul.classList.toggle("hidden");
      icon.classList.toggle("fa-caret-up");
      icon.classList.toggle("fa-caret-down");
    } else {
      // Hide all other modules' subcategories
      ul.classList.add("hidden");
      icon.classList.remove("fa-caret-up");
      icon.classList.add("fa-caret-down");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const modules = document.querySelectorAll(".module");
  modules.forEach((module) => {
    const moduleHeader = module.querySelector("div");
    const moduleUrl = moduleHeader.getAttribute("data-url");

    // Click event for the module header
    moduleHeader.addEventListener("click", (event) => {
      // Prevent the click from propagating to subcategory links
      event.stopPropagation();
      // Toggle the subcategories
      toggleModule(module);
      // Navigate to the module's main page if subcategories are not visible
      if (module.querySelector("ul").classList.contains("hidden")) {
        window.location.href = moduleUrl;
      }
    });

    // Add event listeners to subcategory links
    const subcategoryLinks = module.querySelectorAll("ul li a");
    subcategoryLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click from bubbling up to the module
        const url = link.getAttribute("href"); // Get the URL from the link
        window.location.href = url; // Navigate to the subcategory page
      });
    });
  });
});

function handleSmoothScrolling() {
  // Get all links in the sidebar
  const sidebarLinks = document.querySelectorAll(".sidebar a");

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Prevent default link behavior
      e.preventDefault();

      // Get the target section
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // If the target section exists, scroll to it smoothly
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        // Update the highlighted state
        updateHighlightedState(targetId);
      }
    });
  });
}

// Function to update highlighted state
function updateHighlightedState(targetId) {
  // Remove active class from all links
  document.querySelectorAll(".sidebar a").forEach((link) => {
    link.parentElement.classList.remove("bg-button", "shadow-md");
  });

  // Add active class to the current link
  const currentLink = document.querySelector(`.sidebar a[href="${targetId}"]`);
  if (currentLink) {
    currentLink.parentElement.classList.add("bg-button", "shadow-md");
  }
}

// Call the function initially
handleSmoothScrolling();
