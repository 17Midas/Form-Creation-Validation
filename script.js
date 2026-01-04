// Step 1: Wrap script in DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: Form and Feedback Division Selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Step 3: Form Submission and Event Prevention
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting to the server
        event.preventDefault();

        // Step 4: Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Step 5: Validation Logic
        let isValid = true;
        let messages = [];

        // Username Validation: Minimum 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation: Must contain '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must include '@' and '.').");
        }

        // Password Validation: Minimum 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Step 6: Displaying Feedback
        feedbackDiv.style.display = "block"; // Make feedbackDiv visible

        if (isValid) {
            // Success Message
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color
        } else {
            // Error Messages
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks
            feedbackDiv.style.color = "#dc3545"; // Red color
        }
    });
});
