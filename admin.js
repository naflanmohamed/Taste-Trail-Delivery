document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('userList');
    let users = JSON.parse(localStorage.getItem('users')) || [];

    function displayUsers() {
        userList.innerHTML = '';
        users.forEach((user, index) => {
            const li = document.createElement('li');
            li.textContent = `${user.username} (${user.role}) - Approved: ${user.approved}`;

            const approveButton = document.createElement('button');
            approveButton.textContent = 'Approve';
            approveButton.classList.add('approve-button');
            approveButton.addEventListener('click', function() {
                users[index].approved = true;
                localStorage.setItem('users', JSON.stringify(users));
                displayUsers();
            });

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', function() {
                users.splice(index, 1);
                localStorage.setItem('users', JSON.stringify(users));
                displayUsers();
            });

            li.appendChild(approveButton);
            li.appendChild(removeButton);
            userList.appendChild(li);
        });
    }

    displayUsers();
});
