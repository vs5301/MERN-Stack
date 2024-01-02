// setTimeout

const showMessage = () => {
    console.log("Hello after 3 seconds");
}

// Schedule the message
// setTimeout(showMessage, 3000)

// rewrite
// setTimeout(() => {
// console.log("Hello after 3 seconds")
// }, 3000)

setTimeout(function () {
    console.log("Hello after 3 seconds");
}, 3000)
console.log("waiting for the message");

// Cancelling a `setTimeout`

const timeOutId = setTimeout(() => {
    console.log("This will not be displayed");
}, 5000)

console.log('Timeout scheduled');
clearTimeout(timeOutId)
console.log("Timeout canceled");

// setInterval

setInterval(() => {
    console.log("Am calling at every 2 second");
}, 2000)

let counter = 0
const intervalId = setInterval(() => {
    counter++
    console.log(counter);

    if (counter >= 5) {
        clearInterval(intervalId)
    }
}, 2000)

// Creating a blocking

console.log("Starting Blocking Operations");
// Create blocking code
for (let i = 0; i < 100; i++) {
    // simulate some operations
    console.log(i);
}
console.log("Finished Blocking Operations");

// Create a non blocking

console.log("Starting non blocking operations");
setTimeout(() => {
    console.log("Executing delay");
}, 4000)
console.log("Finished non blocking operations");