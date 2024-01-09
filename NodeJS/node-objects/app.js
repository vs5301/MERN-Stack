// Accessing the global object
global.myGlobal = "Hello from the global object"

console.log(global);

// To check if our variable is try global
console.log(__dirname);
console.log(__filename);

// Using the `setInterval` and `clearInterval`
let count = 0
const intervalId = setInterval(() => {
    console.log('Hello');
    count++
    if (count === 5) {
        clearInterval(intervalId)
    }
}, 1000)

// setTimeout
setTimeout(() => {
    console.log("This will be delayed by 5s");
}, 5000)