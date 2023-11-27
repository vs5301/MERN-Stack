// 1. Object constructor function

    // create
    var person1 = new Object()

    // add properties
    person1.name = "John"
    person1.age = 30
    person1.isMarried = true
    person1.hobbies = ["Sports", "Cooking"]

    var person2 = new Object({
        name: "John",
        age: 30,
        hobbies: ["Sports", "Cooking"],
        isMarried: true
    })

    // Object literal syntax
    var person3 = {}

    // add properties
    person3.name = "John"
    person3.age = 30
    person3.isMarried = true
    person3.hobbies = ["Cooking", "Sports"]

var person4 = {
    name: "John",
    age: 30,
    isMarried: true,
    hobbies: ["Cooking", "Sports"]
}

// Accessing object properties

// Using the dot notation
// get the name of the person
var personName = person4.name
console.log(personName); 

// Using the bracket notation
var personAge = person4["age"]

// Updating Object properties

// Using the dot notation
person1.name = "Billy"
person1.age = 100
person1.hobbies = ["Hiking", "Dancing"]

// Using the bracket notation
person2["age"] = 90
person2["hobbies"] = ["Coding", "Outing"]

// Deleting Object Properties

person3["isAdmin"] = true
person3["status"] = "not verified"

// Using the dot notation
delete person3.age

// Using the bracket notation
delete person3["hobbies"]


// Adding methods to object

person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    viewsCount: 100,
    isMarried: true,
    hobbies: ["Cooking", "Sports"],
    isAdmin: true,
    status: "false",
    printFullName: function () {
        console.log(`Your full name is ${this.firstName} ${this.lastName}`);
    },
    checkStatus: function () {
        if (this.status === false) {
            delete this.isAdmin
        }
    }
}
person2.checkStatus()

var fName = person2.firstName
var lName = person2.lastName

var fullName = fName + " " + lName

fullName = `${person2.firstName} ${person2.lastName}`

// printFullName method to the object

person2.printFullName = function () {
    console.log(`Your full name is ${this.firstName} ${this.lastName}`);
}

person2.printFullName()

// This keyword
console.log(this);

// Iterating over Object Properties
/*
    1. for..in loop
    2. object.keys
    3. object.values
    4. object.entries
*/

var personObj = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    viewsCount: 100,
    isMarried: true,
    hobbies: ["Cooking", "Sports"],
    isAdmin: true,
    status: false,
}

// for in loop
for (let key in personObj) {
    console.log(key);    
}

// Object.keys

var myKeys = Object.keys(personObj)
console.log(myKeys);

var arr = [1, 4, 6, 2, 8]
myKeys.forEach(function (data) {
    console.log(data);
})

// Object.values()
var objValues = Object.values(personObj)
console.log(objValues);

// Object.entries()
var objEntries = Object.entries(personObj)
objEntries.forEach(function (entry) {
    console.log(entry);
})

// Destructuring assignment
objEntries.forEach(function ([key, value]) {
    console.log(`${key}: ${value}`);
})

// Function which prints the name and age property of the user object
var user = {
    name: "John",
    age: 30,
    location: "New York",
    printInfo: function () {
        return `${this.name} is ${this.age} years old`
    }
}
console.log(user.printInfo());

// Function to print married property of user object
user["married"] = false

user.isMarried = function () {
    if (this.married) {
        console.log(`${this.name} is married`);
    } else {
        console.log(`${this.name} is not married`);
    }
}
user.isMarried()

// Function that iterates over an object and prints out each key-value pair in the format "key: value"
var bookObj = {
    name: "Web development guide",
    author: "i-Novotek Academy",
    numPages: 5000,
    ISBN: "IN234",
}

var printObj = function (obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
printObj(bookObj)