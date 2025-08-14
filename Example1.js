// ===============================
// JavaScript Variables & Basics Example
// ===============================

// 'var' declaration (function-scoped, older style)
var city = "London";

// 'let' declaration (block-scoped, modern style)
let country = "UK";

// 'const' declaration (constant value, cannot be changed)
const pi = 3.14;

// Printing values to console
console.log(country); // Outputs: UK
console.log(city);    // Outputs: London

// ===============================
// Basic Arithmetic
// ===============================
let a1 = 100;
let a2 = 200;
console.log(a1 + a2); // Addition: 100 + 200 = 300

// ===============================
// Comparison Operator (===)
// ===============================
let sum = 5 + 3;               // sum = 8
let isEqual = (sum === 8);     // true if sum equals 8 (strict comparison)
console.log(isEqual);          // Outputs: true

// ===============================
// Assignment Operator (+=)
// ===============================
let assignVar = 10;
assignVar += 5;                // assignVar = assignVar + 5
console.log(assignVar);        // Outputs: 15

// ===============================
// Different Data Types
// ===============================
let str = "Hello";             // String
let num = 42;                  // Number
let obj = { name: "John" };    // Object
let arr = [1, 2, 3];           // Array

// ===============================
// Logical Example - Exam Eligibility
// ===============================
let attendance = 80 + 5;       // Total attendance = 85
let eligibleForExam = (attendance >= 75); // true if attendance is at least 75
console.log("Eligible for exam?", eligibleForExam); // Outputs: Eligible for exam? true

// ===============================
// Function Example
// ===============================
// Function that greets a student by name
function greetStudent(name) { 
    return "Welcome " + name + " to KL University!";
}

// Calling the function with "Ravi"
console.log(greetStudent("Ravi")); // Outputs: Welcome Ravi to KL University!
