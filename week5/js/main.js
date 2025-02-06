const radiusP = document.querySelector('#radius');
const resultP = document.querySelector('#result');

function getNumber() {
    let radius = prompt("Please enter a number for a circle radius:");
    radiusP.innerText += radius;
    return radius;
}

function calculateArea() {
    const number = getNumber();
    console.log(number);
    // check if the the number is numeric or not
    if(isNaN(number)) {
        return "Error: You entered an invalid number";
    } else {
        return (Math.PI * Math.pow(number, 2)).toFixed(2);
    }
}

const result = calculateArea();
resultP.innerText += result;