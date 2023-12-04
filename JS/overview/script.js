// single threaded

var myName = "John"
var age = 30

const displayName = () => {
    console.log(myName);
}

const sayHello = () => {
    console.log("Hello");
}

sayHello()
console.log("Am called");
displayName()

// Dynamically Typed
var fullName = "John Doe"
var age = 28

// update 
fullName = true
console.log(fullName);

// OOP
var arr = [1, 2, 3, 4, 5]
arr.pop()
arr.push(3)

// non blocking code
const greetUser = () => {
    console.log("Hello");
}

console.log("Go to bank");

setTimeout(function() {
    sayHello()
}, 2000);

console.log("Go to park");