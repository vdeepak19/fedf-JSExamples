// factorial.js

const n = parseInt(process.argv[2]);   // take input from CMD
let fact = 1;
if (isNaN(n) || n < 0) {
    console.log("Enter a valid positive integer.");
} else {
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(`Factorial of ${n} is ${fact}`);
}


// process.argv[2]
// process.argv is an array that stores command line arguments.
// process.argv[0] → path to Node.js
// process.argv[1] → path to your JS file
// process.argv[2] → the first value you type after the filename.
// isNaN(n) → checks if the input is not a number.
// ---------------------------------------------------------------------------------------------------------------


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}
rl.question("Enter a decimal number: ", function(answer) {
    const number = parseInt(answer);
    convertToBinary(number);
    rl.close();
});
