// Math Functions

// Math.abs(x)
var ans = Math.abs(10)
console.log(ans);

// Math.round()
ans = Math.round(5.4)
console.log(ans);

// Math.ceil()
ans = Math.ceil(5.1)
console.log(ans);

// Math.floor()
ans = Math.floor(5.9)
console.log(ans);

// Math.sqrt()
ans = Math.sqrt(36)
console.log(ans);

// Math.pow()
ans = Math.pow(2, 3)
console.log(ans);

// Math.min()
ans = Math.min(9, -2)
console.log(ans);

// Math.max()
ans = Math.max(9, -2)
console.log(ans);

// Math.random()
ans = Math.random()
console.log(ans);

// get random numbers between two numbers
// Math.random() * (max-min + 1) + min

var rand = Math.random() * (20 - 10 + 1) + 10
console.log(rand);

// Function to find the maximum of two numbers
function getMaxNum(number1, number2) {
    if (number1 > number2) {
        return number1
    } else {
        return number2
    }
}
var result = getMaxNum(20, 40)

// Function to find the minimum of two numbers
function getMaxNum2(number1, number2) {
    return Math.max(number1, number2)
}
result = getMaxNum2(20, 40)
console.log(result);

// Function to find the average of two numbers
function average(number1, number2) {
    if (Number(number1) && Number(number2)) {
        let avg = (number1 + number2) / 2
        return Math.floor(avg)
    } else {
        return "Please provide a number"
    }
}
console.log(average(2, 4));

// Function to get random number between two numbers
function getRandomNum(min, max) {
    return Math.random() * (max-min + 1) + min
}
console.log(getRandomNum(30,40));