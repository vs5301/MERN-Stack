// 1. Using the new keyword
var books = new Array("css", "html", "js")

books = new Array()
books[0] = "CSS"
books[1] = "HTML"
books[2] = "JS"

// 2. Array Literal

books = ['js', 'react', 'redux']
books = []

books[0] = "js"
books[1] = "react"
books[2] = "redux"

// Arrays can take any data type value
var arr = ["food", true, 20, null, undefined]

console.log("~~~~~~~~~Accessing an Array~~~~~~~~~");

// Accessing Arrays
books = ["mongoDB", "Node", "React"]

// get first book
var b0 = books[0]
console.log(b0);

// get second book
var b1 = books[1]
console.log(b1);

// get third book
var b2 = books[2]
console.log(b2);

// get fourth book
var b3 = books[3]
console.log(b3);

console.log("~~~~~~~~~Iterating an Array~~~~~~~~~");

// Iterating over an array
for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
}

console.log("~~~~~~~~~Array Methods~~~~~~~~~");

// Push()
console.log("Push");
books.push("CSS")
console.log(books);

// Pop()
console.log("Pop");
books.pop()
console.log(books);

// Unshift()
console.log("Unshift");
books.unshift("novel")
console.log(books);

// Shift()
console.log("Shift");
books.shift()
console.log(books);

// IndexOf()
console.log("IndexOf");
console.log(books.indexOf("MongoDB"));

// lastIndexOf()
console.log("lastIndexOf");
console.log(books.lastIndexOf("Node JS"));

// include()
console.log("includes");
console.log(books.includes("Node JS"));

// reverse()
console.log("reverse");
console.log(books.reverse("Node JS"));

// reduce() - returns a single, does not mutate
var productivity = [12, 30, 5, 8, 2, 4]
productivity.reduce(function (acc, currVal, idx, arr) {
    console.log(`Accumulator ${acc}`);
    console.log(`currVal ${currVal}`);
    console.log(`idx ${idx}`);
    console.log(`arr ${arr}`);
}, 0)

// Find the total qty in the array
var ans = productivity.reduce(function (acc, currVal, idx, arr) {
    return acc + currVal
}, 0)
console.log(ans);


// find
var agesArr = [10, 20, 30, 50, 24]
var result = agesArr.find(function (age) {
    return age < 30
})
console.log(result);


// filter
var scoresArr = [20, 50, 60, 20, 30, 50, 24]
result = scoresArr.filter(function (score) {
    return score > 50
})
console.log(ans);

// Create a for loop that prints out the numbers in the array
var amount = [90, 400, 1, 5, 7]
for (let i = 0; i < amount.length; i++) {
    console.log(amount[i]);
}

// Print the string in an array
var str = ["This", "is", "my", "node", "you"]
for (let i = 0; i < str.length; i++) {
    console.log(`This is a string number ${i}`)
}

// Function to reverse an array
var reversedArr = function (arr) {
    return arr.reverse()
}
console.log(reversedArr([1, 2, 3, 4, 5, 6]));

// Function to find the sum of numbers in the array
var sumOfAllNumAr = function (arr) {
    return arr.reduce((acc, curr) => acc + curr)
}

console.log(sumOfAllNumAr([1, 25, 6, 9, 2]));

// Function to find average of all numbers in the array
var avgNum = function (arr) {
    var avg = arr.reduce(function (acc, currVal) {
        return acc + currVal / arr.length
    }, 0)
    return `$ ${avg.toFixed(2)}`
}
console.log(avgNum([2, 3, 4, 5])); 

// Function to remove all duplicate values from an array
arr = [2, 4, 6, 2, 4, 4, 5, 8, 9, 4]
function removeDuplicates(arr) {
    var filteredData = arr.filter(function (el, idx, arr) {
        return arr.indexOf(el) === idx
    })
    return filteredData
}

console.log(removeDuplicates(arr));
console.log(arr);

// Function to filter an array 
arr = ["NodeJS", "ExpressJS", "React", "CSS", "HTML", "JS", "MongoDB"]
const findThreeLetters = function (arr) {
    return arr.filter(function (el, idx, arr) {
        return el.length <= 3
    })
}
console.log(findThreeLetters(arr));