// Introduction to Arrays

let superheros = ["Superman" , "Batman" , "Joker", "Spiderman", "Wonder Woman"];

console.log("Hero 1 is" , superheros[0]);
console.log("Hero 5 is" , superheros[4]);

superheros[2] = "Doctor Strange";

console.log(superheros);

// Push Method (Adding a new value to the array)
superheros.push("Deadpool");
console.log(superheros);

// Pop Method (Removing last value in the array)
superheros.pop();
console.log(superheros);

// Array iteration
for (let i = 0; i <= 4; i++) {
    console.log("Hero" , i+1 , "is" , superheros[i]);
}
// --> if you want to specify where is starts and end

// forEach Method
superheros.forEach(function(hero) {
    console.log("Hero is" , hero);
})

// Array Methods
console.log("Array Length is" , superheros.length);
console.log("Index of Wonder Woman is" , superheros.indexOf("Wonder Woman"));
console.log("Joined Array: " , superheros.join(" - "));

let sliceArray = superheros.slice(1, 4);
console.log(sliceArray);

let slicedArray = superheros.slice(0, 3);
console.log("Sliced Array:", slicedArray);
console.log("Superheros Array:", superheros);

let removedElements = superheros.splice(2, 2);
console.log("Removed Elements:", removedElements);
console.log("Updated array:", superheros);