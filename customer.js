document.addEventListener('DOMContentLoaded', function() {
    const restaurantList = document.getElementById('restaurants');
    const menuList = document.getElementById('menuList');
    const orderForm = document.getElementById('orderForm');
    const dishSelect = document.getElementById('dish');

    function displayRestaurants() {
        restaurantList.innerHTML = '';
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.filter(user => user.role === 'restaurant' && user.approved).forEach(restaurant => {
            const li = document.createElement('li');
            li.textContent = restaurant.username;
            li.addEventListener('click', function() {
                displayMenu(restaurant.username);
            });
            restaurantList.appendChild(li);
        });
    }

    function displayMenu(restaurant) {
        menuList.innerHTML = '';
        let dishes = JSON.parse(localStorage.getItem('dishes')) || [];
        dishes.forEach(dish => {
            const li = document.createElement('li');
            li.textContent = `${dish.name} - $${dish.price}`;
            menuList.appendChild(li);

            const option = document.createElement('option');
            option.value = dish.name;
            option.textContent = dish.name;
            dishSelect.appendChild(option);
        });
    }

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const dish = document.getElementById('dish').value;
        const quantity = document.getElementById('quantity').value;

        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push({ customer: 'Customer', dish: dish, quantity: quantity });
        localStorage.setItem('orders', JSON.stringify(orders));

        alert('Order placed successfully!');
    });

    displayRestaurants();
});

