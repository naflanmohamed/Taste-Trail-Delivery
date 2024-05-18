function initializeAdmin() {
    const adminUser = {
        role: 'admin',
        username: 'admin',
        password: 'admin123',
        approved: true
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const adminExists = users.some(user => user.role === 'admin' && user.username === adminUser.username);

    if (!adminExists) {
        users.push(adminUser);
        localStorage.setItem('users', JSON.stringify(users));
    }
}

initializeAdmin();

document.getElementById('signupForm')?.addEventListener('submit', function(event) {
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
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password && user.role === role);

    if (user) {
        if (!user.approved) {
            alert('Your account is not approved yet.');
        } else {
            if (role === 'admin') {
                window.location.href = 'admin.html';
            } else if (role === 'restaurant') {
                window.location.href = 'restaurant.html';
            } else if (role === 'customer') {
                window.location.href = 'customer.html';
            }
        }
    } else {
        alert('Invalid credentials or role.');
    }
});
