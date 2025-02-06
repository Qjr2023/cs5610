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




// let shoppingItems = ["bread", "cheese", "green pepper"];
// // ul class = "shopping-list"
// const shoppingListElement = document.querySelector('.shopping');

// function populateSgoppingList(shoppingListItems) {

//     for (let i = 0; i < shoppingListItems.length; i++) {
//         // we need an element to each question
//         const li = document.createElement('li');
//         li.innerText = shoppingListItems[i];
//         shoppingListElement.appendChild(li);
//     }
//     // shoppingItems.forEach(item => {
//     //     console.log(item);
// }
// populateSgoppingList(shoppingItems);

// //Write a JS function to change the list marker type of all list items in the document to square by using a CSS rules with class selector.
// function changeListMarker() {
//     shoppingListElement.classList.add("squareList");
// }

// changeListMarker();





const button = document.querySelector('#updateImage');
// cheech the storage
const buttonText = localStorage.getItem('buttonText');
// console.log(buttonText);
// upadate the button text
if (buttonText) {
    button.innerText = buttonText;
}

function changeButtonText() {
    // will be called when the button is clicked
    // change the text to "Clicked!"
    if(button.innerText === "Clicked!") {
        button.innerText = "Click Me!";
    } else if (button.innerText === "Click Me!") {
        button.innerText = "Clicked!"
    }
    localStorage.setItem('buttonText', button.innerText);
    // if we want this to be called only once
    // button.removeEventListener('click', changeButtonText);
}

button.addEventListener('click', changeButtonText);





const buttonContainer = document.querySelector('.buttonContainer');

function changeButtonColor(event) {

    if (event.target.nodeName === 'BUTTON') {
        // return;
    
    console.log(event.target.innerText);
    // change the background color of the button
    event.target.style.backgroundColor = event.target.innerText;}
}
// setting the listener to the parent element
buttonContainer.addEventListener('click', changeButtonColor);
