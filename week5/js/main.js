// const radiusP = document.querySelector('#radius');
// const resultP = document.querySelector('#result');

// function getNumber() {
//     let radius = prompt("Please enter a number for a circle radius:");
//     radiusP.innerText += radius;
//     return radius;
// }

// function calculateArea() {
//     const number = getNumber();
//     console.log(number);
//     // check if the the number is numeric or not
//     if(isNaN(number)) {
//         return "Error: You entered an invalid number";
//     } else {
//         return (Math.PI * Math.pow(number, 2)).toFixed(2);
//     }
// }

// const result = calculateArea();
// resultP.innerText += result;



let shoppingItems = ["bread", "cheese", "green pepper"];
// ul class = "shopping-list"
const shoppingListElement = document.querySelector('.shopping');

function populateSgoppingList(shoppingListItems) {

    for (let i = 0; i < shoppingListItems.length; i++) {
        // we need an element to each question
        const li = document.createElement('li');
        li.innerText = shoppingListItems[i];
        shoppingListElement.appendChild(li);
    }
    // shoppingItems.forEach(item => {
    //     console.log(item);
}
populateSgoppingList(shoppingItems);


