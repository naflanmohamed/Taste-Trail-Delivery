document.addEventListener('DOMContentLoaded', function() {
    const dishForm = document.getElementById('dishForm');
    const orderList = document.getElementById('orderList');

    dishForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const dishName = document.getElementById('dishName').value;
        const dishPrice = document.getElementById('dishPrice').value;

        let dishes = JSON.parse(localStorage.getItem('dishes')) || [];
        dishes.push({ name: dishName, price: dishPrice });
        localStorage.setItem('dishes', JSON.stringify(dishes));

        alert('Dish added successfully!');
    });

    function displayOrders() {
        orderList.innerHTML = '';
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.forEach(order => {
            const li = document.createElement('li');
            li.textContent = `Customer: ${order.customer}, Dish: ${order.dish}, Quantity: ${order.quantity}`;
            orderList.appendChild(li);
        });
    }

    displayOrders();
});
