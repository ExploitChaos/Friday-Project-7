// Wait for the DOM to be fully loaded before running scripts
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

    // --- Contact Form Handler (for demonstration) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent the form from actually submitting (which would refresh the page)
            event.preventDefault(); 
            
            // Show a success message
            const formStatus = document.getElementById('form-status');
            formStatus.textContent = "Message sent successfully! (This is a demo)";
            formStatus.style.color = "green";

            // Clear the form fields after a short delay
            setTimeout(() => {
                contactForm.reset();
                formStatus.textContent = "";
            }, 3000);
        });
    }

});
