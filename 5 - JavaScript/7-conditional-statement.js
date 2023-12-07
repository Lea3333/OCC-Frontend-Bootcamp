// Conditional Statements
let age= 20;

// If
if (age >= 18) {
console.log("You are eligible to vote")
}
else {
    console.log("You are not eligible to vote")
}

// If, if-else, else
let temperature = 25;

if (temperature < 0) {
    console.log("It's freezing");
} else if (temperature >=0 && temperature < 20) {
    console.log("It's cool outside");
} else {
    console.log("It is a warm day!");
}

// Conditional: Switch statement
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Friday":
        console.log("It's the end of the week");
        break;
    default:
        console.log("It's a regular day")   
        break; 
}