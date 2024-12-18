// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Validate form fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            status.style.color = "red";
            status.textContent = "Please fill out all fields.";
            return;
        }

        if (!validateEmail(email)) {
            status.style.color = "red";
            status.textContent = "Please enter a valid email address.";
            return;
        }

        // Simulate form submission success
        status.style.color = "green";
        status.textContent = "Thank you for your message! We'll get back to you soon.";
        
        // Clear the form
        form.reset();
    });

    // Function to validate email format
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
