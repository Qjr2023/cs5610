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

function displayOrderSummary(order) {
    console.log(`You have ordered a ${order.size} ${order.flavor} ${order.toppings[0]} with these toppings: ${order.toppings.join(', ') || 'None'}
Total Price: $${order.finalPrice.toFixed(2)}`);
}

function placeOrder(flavor, size, toppings) {
    // Calculate toppings price
    const toppingsPrice = toppings.reduce((total, topping) => total + prices[topping], 0);
    
    // Calculate final price
    const finalPrice = prices[size] * (prices[flavor] + toppingsPrice);
    
    // Create order object
    const order = {
        flavor,
        size,
        toppings,
        finalPrice
    };
    
    displayOrderSummary(order);
}

// Test the code with some example orders
placeOrder('mango', 'medium', ['boba', 'jelly']);
placeOrder('original', 'large', ['pudding']);
placeOrder('strawberry', 'small', []);