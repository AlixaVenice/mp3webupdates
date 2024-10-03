document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add login logic here
    alert('Login form submitted!');
});

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add profile update logic here
    alert('Profile updated!');
});
document.getElementById("login-btn").addEventListener("click", function() {
    window.location.href = "LogIn.html";
});