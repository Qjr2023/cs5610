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

