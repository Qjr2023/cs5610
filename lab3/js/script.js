const prices = {
    // Flavors
    original: 2.5,
    mango: 3.0,
    strawberry: 3.5,
    
    // Sizes
    small: 1.0,
    medium: 1.5,
    large: 2.0,
    
    // Toppings
    boba: 0.5,
    jelly: 0.75,
    pudding: 1.0
};

function validateOrder() {
    const flavor = document.getElementById('flavor').value;
    const size = document.getElementById('size').value;
    // Check if flavor and size are selected
    if (flavor === '' || size === '') {
        alert('Please select both a flavor and size for your order!');
        return false;
    }
    return true;
}

function displayOrderSummary(order) {
    const summaryText =document.getElementById('orderDetails');
    if (order.toppings.length === 0) {
        summaryText.textContent = `You have ordered a ${order.size} ${order.flavor} boba with no toppings. Total Price: $${order.finalPrice.toFixed(2)}`;
    } else {
        summaryText.textContent = `You have ordered a ${order.size} ${order.flavor} boba with these toppings: ${order.toppings.join(', ')}. Total Price: $${order.finalPrice.toFixed(2)}`;
    }
}

function placeOrder() {
    if (!validateOrder()) { 
        return;
    }
    const flavor = document.getElementById('flavor').value;
    const size = document.getElementById('size').value;
    const toppingsSelect = document.getElementById('toppings');
    // Get all selected toppings
    // Instructions: You need to hold down the Command key on Mac and the Ctrl key on Windows to select multiple items.
    const toppings = Array.from(toppingsSelect.selectedOptions)
        .map(option => option.value)
        .filter(value => value !== '');
    
    // Calculate final price
    const toppingsPrice = toppings.reduce((total, topping) => total + prices[topping], 0);
    const finalPrice = prices[size] * (prices[flavor] + toppingsPrice);
    
    let order = {
        flavor: flavor,
        size: size,
        toppings: toppings,
        finalPrice: finalPrice
    };
    
    displayOrderSummary(order);
}

// Add event listener to place order button
document.getElementById('placeOrderButton').addEventListener('click', function(e) {
    e.preventDefault();
    placeOrder();
});