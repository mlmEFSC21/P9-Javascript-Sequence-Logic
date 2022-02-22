let first_input = prompt("Please input the first number");
let second_input = prompt("Please input the first number");
let x = parseInt(first_input);
let y = parseInt(second_input);

function add(p1, p2) {
    return p1 + p2;
}
function subtract(p1, p2) {
    return p1 - p2;
}
function multiply(p1, p2) {
    1;
    return p1 * p2;
}
function divide(p1, p2) {
    return p1 / p2;
}

let sum = add(x, y);
let difference = subtract(x, y);
let product = multiply(x, y);
let quotient = divide(x, y);

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);

document.open();
document.write("<p>The sum of " + x + " and " + y + " is " + sum + "</p>");
document.write("<p>The difference of " + x + " and " + y + " is " + difference + "</p>");
document.write("<p>The product of " + x + " and " + y + " is " + product + "</p>");
document.write("<p>The quotient of " + x + " and " + y + " is " + quotient + "</p>");
document.close;
