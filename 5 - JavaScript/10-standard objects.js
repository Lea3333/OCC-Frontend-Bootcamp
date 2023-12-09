const person = {
    firstname: "Kim",
    lastname: "Doe",
    nickname: "KD",
    age: 28,
    height: "5'9",
    hobbies: ["reading", "gaming", "painting"],
    greet: function() {
        console.log(`Hello, my name is ${this.firstname} and I am ${this.age}.`);
    }
};

// Dot notation
console.log(person.firstname);
console.log(person.hobbies);

person.greet();

// Adding new properties
person.nationality ="American";
console.log(person.nationality);

// Adding new methods
person.talkHobbies = function() {
    console.log(`I like ${person.hobbies[1]}!`);
}

// OOP = Object-oriented programming

// Nested object
const movie = {
    title: "Pulp fiction",
    genre: "Action",
    cast: ["John Travolta", "Samuel L. Jackson"]
}

person.favoriteMovie = movie;
console.log(person.favoriteMovie.title);

// Destructuring objetcs
// const lastname = person.lastname;
// const nickname = person.nickname;
// const height = person.height;

const { lastname, nickname, age} = person;
console.log(lastname, nickname, age);

const { height } = person;
console.log(height);