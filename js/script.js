// Dummy credentials for login validation
const validUsername = "user";
const validPassword = "password";

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        // Store login status in localStorage
        localStorage.setItem("loggedIn", "true");
        alert("Login Successful!");
        window.location.href = "index.html"; // Redirect to Home Page
    } else {
        alert("Invalid Username or Password!");
    }
});


// Handle sign up form submission
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Signup Successful! Please login now.");
        window.location.href = "login.html"; // Redirect to login page
    }
});
