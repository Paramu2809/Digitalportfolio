let cartItems = [];
let totalPrice = 0;

function addToCart(itemName, price) {
    cartItems.push(itemName);
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItemsElement.appendChild(li);
    });
    
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}

function checkout() {
    alert('Thank you for your purchase!');
    cartItems = [];
    totalPrice = 0;
    updateCart();
}