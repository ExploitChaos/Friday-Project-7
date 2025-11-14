document.addEventListener('DOMContentLoaded', () => {

    // --- Active Nav Link Highlighter ---
    
    // Get the name of the current page file (e.g., "index.html", "contact.html")
    const currentPage = window.location.pathname.split('/').pop();
    
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        // Check if the link's href matches the current page
        // We check for "" or "index.html" specifically for the home page
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // --- Theme Switcher ---
    const themeButtons = document.querySelectorAll('.theme-btn');
    const root = document.documentElement; // Get the <html> element
    
    // Function to set the theme
    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        
        // Update active button
        themeButtons.forEach(btn => {
            if (btn.getAttribute('data-theme') === theme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // 1. Add click listeners to buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            setTheme(theme);
        });
    });

    // 2. On page load, check for saved theme in localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('light'); // Default theme
    }
    

    // --- Contact Form Handler (for demonstration) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent the form from actually submitting (which would refresh the page)
            event.preventDefault(); 
            
            // Show a success message
            const formStatus = document.getElementById('form-status');
            formStatus.textContent = "Message sent successfully! (This is a demo)";
            // formStatus.style.color is now set by CSS variables

            // Clear the form fields after a short delay
            setTimeout(() => {
                contactForm.reset();
                formStatus.textContent = "";
            }, 3000);
        });
    }

});
