let first_input = prompt("Please input the first number");
let second_input = prompt("Please input the second number");
let x = parseInt(first_input);
let y = parseInt(second_input);

function add(n1, n2) {
    return n1 + n2;
}
function subtract(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function average(n1, n2) {
    return (n1 + n2) / 2;
}

let sum = add(x, y);
let difference = subtract(x, y);
let product = multiply(x, y);
let avg = average(x, y);

// console.log(sum);
// console.log(difference);
// console.log(product);
// console.log(avg);
const para = document.createElement("p");
para.innerText = "The sum of " + x + " and " + y + " is " + sum + ".\n";
"The difference of " + x + " and " + y + " is " + difference + ".\n";
document.body.appendChild(para);

// document.write("<p>The sum of " + x + " and " + y + " is " + sum + "</p>");
// document.write("<p>The difference of " + x + " and " + y + " is " + difference + "</p>");
// document.write("<p>The product of " + x + " and " + y + " is " + product + "</p>");
// document.write("<p>The average of " + x + " and " + y + " is " + avg + "</p>");
