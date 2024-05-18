document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = {
        role: role,
        username: username,
        password: password,
        approved: false
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! Wait for admin approval.');
});
