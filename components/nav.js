async function loadNavbar() {
    try {
        const response = await fetch('nav.html');
        const html = await response.text();
        
        // Get the container element
        const container = document.getElementById('navbar-container');
        
        // Set the HTML content
        container.innerHTML = html;

        // Initialize dropdown functionality
        initializeDropdown();

    } catch (error) {
        console.error('Error loading navbar:', error);
        // Show fallback navigation if loading fails
        showFallbackNav();
    }
}

// Initialize dropdown functionality
function initializeDropdown() {
    // Wait for DOM to settle
    requestAnimationFrame(() => {
        const dropdownButton = document.getElementById('dropdownButton');
        const dropdownMenu = document.getElementById('onlineProgramsDropdown');

        // Ensure dropdown starts hidden
        dropdownMenu.style.display = 'none';

        // Toggle dropdown function
        const toggleDropdown = () => {
            dropdownMenu.classList.toggle('show');
            
            // Toggle caret rotation
            const caret = dropdownButton.querySelector('.fa-caret-down');
            if (caret) {
                caret.classList.toggle('rotate-180');
            }
        };

        // Add event listeners
        dropdownButton.addEventListener('click', (event) => {
            event.preventDefault();
            toggleDropdown();
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!dropdownButton.contains(event.target) && 
                !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('show');
                
                // Reset caret rotation
                const caret = dropdownButton.querySelector('.fa-caret-down');
                if (caret) {
                    caret.classList.remove('rotate-180');
                }
            }
        });
    });
}