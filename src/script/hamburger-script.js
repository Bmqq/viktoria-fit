// hamburger-script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
            navbar.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Also close all dropdowns
            document.querySelectorAll('.language-dropdown, .mobile-language-dropdown').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });

    // Close menu when clicking on nav links
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});