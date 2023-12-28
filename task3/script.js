
function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('Please enter a valid email address');
        return;
    }


    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?!.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain an uppercase letter, a number, and no special characters other than @');
        return;
    }


    alert('Login successful!');
}
