const number = parseInt(prompt("Enter a number: "));
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
  console.log("The number is zero");
}
else {
     console.log("The number is negative");
}

// Example5.js
// ------------------------------------------------------------------------------------------------------------------
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter a number: ", function(answer) {
  const number = parseInt(answer);
  if (number > 0) {
    console.log("The number is positive");
  } else if (number === 0) {
    console.log("The number is zero");
  } else {
    console.log("The number is negative");
  }
  rl.close();
});

// require("readline") → imports Node.js’s built-in readline module.
// This module helps take user input (from keyboard) and display output.
// readline.createInterface() → creates an interface to interact with the user.


// -----------------------------------------------------------------------------------------------------------
// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
console.log("The largest number is " + largest);