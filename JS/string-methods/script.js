/*
// Ways of creating a string

    const myName = 'John'

    // Using the constructor function

    const firstName = new String("John")

    console.log((myName ===firstName));
    console.log(myName, firstName);
*/

/*
    // + operator

    const str1 = "Hello"
    const str2 = "How are you"

    // concat method
    // const result = str1+" "+str2


    // concat method ()
    const result = str1.concat(" "+str2)
    console.log(result);
*/
/*
    JS Template Literals
    String templates
    Back tick syntax
    template strings
*/

// Back Tick Syntax
const msg1 = `Good day`
const msg2 = `"Good morning"`
console.log(msg2);

// Multiline strings
const msg = `Welcome to the application, try to make sure you have
an
account`
console.log(msg);

// Interpolation
const age = 30
const welcome = `This is your age ${age}`

// String Length

const lastName = "John"
console.log(lastName.length);

// Trim / toUpperCase / toLowerCase / indexOf

// trim
const str1 = " Coding time "
console.log(str1.length);

const res1 = str1.trim()
console.log(res1.length);

// toUpperCase / toLowerCase
const str2 = "Coding time"
console.log(str2.toLowerCase);
console.log(str2.toUpperCase);

// indexOf
const str3 = "coding time"
const res2 = str3.indexOf("time")
console.log(res2);

/*
    Code solution to check if given string has white space
*/

function containsWhiteSpace(str) {
    return str.indexOf(" ") !== -1
}

console.log(containsWhiteSpace("john    "));

// split()
var string = "you"
console.log(string.split(""));

// join()
var convertedStr = string.split("").join("/")

// reverse()
var food = ["pizza", "congee", "Fufu"]
console.log(food.reverse());

// Function to seperate a string using any character
var seperateString = function (arr, char) {
    return arr.join(char)
}
console.log(seperateString(["js", "css", "node js"], "-"));

// Funtion to reverse a string 
function reverseString(str) {
    // convert string to arr
    // var strArr = str.split()
    // reversed the converted string
    return str.split('').reverse().join("")
}
console.log(reverseString("node js"));

// Repeat()
string = "Welcome to i-novotek Academy"
console.log(string.repeat(5));

// StartWith()
string = "Welcome"
console.log(string.startsWith("w"));

// Function to check if a string starts with a certain string
function startsWithFn(str, start) {
    // check if the start with the string
    if (str.startsWith(start)) {
        return
    }
    return `String does not start with ${start}`
}

// Invoke
console.log(startsWithFn("academy", "z"));

// includes()
string = "Are you a developer"
console.log(string.includes("you"));

// Function to check if a string includes a certain string
function txtIncludes(search) {
    const res = "am good today"
    return res.includes(search)
}
console.log(txtIncludes("am good today"));

// Slice()
string = "welcome to javascript methods"
console.log(string.slice(2, 6));

// Function to slice a string into a substring
const sliceString = function (str, num) {
    return str.slice(0, num)
}
console.log(sliceString("Hello World", 10));

// String Comparison
console.log("a" < "z");
console.log("a" < "A");

console.log("Glow" < "Glee");

// Comparison of different types
console.log("a" > 2);
console.log("5" < 5);

// Compare boolean values
console.log(true == 1);

// Compare null and undefined
console.log(null === undefined);