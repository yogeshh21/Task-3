function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('Please enter a valid email address');
        return;
    }

    // Validate password format
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?!.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain an uppercase letter, a number, and no special characters other than @');
        return;
    }

    // Redirect to dashboard if the password is correct
    if (password === 'SmartServTest@123') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid password. Please try again.');
    }
}
