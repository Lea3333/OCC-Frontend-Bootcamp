// Function - set of instructions
function greet() {
    console.log("Instructions # 1");
    console.log("Instructions # 2");
    console.log("Instructions # 3");
    console.log("Merry Christmas");
}
greet();

// Function Hoisting

// 1- Function Declaration
function functionDeclaration() {
    console.log("Hello World! I am a function declaration");
}

// 2- Function Expression
const functionExpression = function() {
    console.log("Hello Universe! I am a function expression");
};


functionExpression();

// Function with parameters

function greet(name){ //variable called paramater vs argument called value
console.log("Hello", name);
}

greet("Regel")

// Function with a return value
function sum(a, b) {
    a = a + 1;   
    return a + b;
    console.log("Hello KC");
}

console.log("Sum", sum(10+5));


// Anonymous function
let greet2 = function() {
    console.log("Hello")
};
greet2();

// Higher order function 
function calculate(operation, num1, num2) {
    return operation(num1, num2);
}

// Callback function
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

// Using higher-order function
let total = calculate(add, 10, 5)
let difference = calculate(substract, 23, 13);

console.log("Result of addition:" , total);
console.log("Result of substraction", difference);