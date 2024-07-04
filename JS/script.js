// js/script.js

// Dynamic greeting on Home Page
document.addEventListener('DOMContentLoaded', function() {
    var name = prompt("Please enter your name:");
    var greeting = document.getElementById('greeting');
    greeting.textContent = "Hi " + name;
});

// Form validation and submission (example)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
    } else {
        alert("Please fill in all fields.");
    }
});
