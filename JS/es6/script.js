// Destructuring

// Array Destructuring
var arr = [1, 2, 3, 4, 5]

var [num1, num2, num3, num4, num5] = arr

var users = [
    { username: "Ben", age: 20 },
    { username: "John", age: 30},
]

var [user1, user2] = users

// Object Destructuring

var obj = {
    firstName: "John",
    age: 24
}

var { firstName: myName, age: myAge } = obj

// add default values
obj = {
    firstName: undefined,
    age: 24
}

var { firstName = "Ben", age, city = "NY" } = obj

// Destructure Parameters
var userObj = {
    firstName: "John", 
    age: 24
}

function getUser(user) {
    console.log("First name: ", user.firstName);
    console.log("age: ", age);
}
getUser(userObj)

// REST Parameters

// argument
function addTwoNums(a, b, ...rest) {
    console.log(a, b);
    console.log(rest);
}
addTwoNums(20, 10, 30, "Me")

function findMax(...rest) {
    console.log(Math.max(...rest));
}
findMax(10, 20, 30, 100, 200)

// Arrow functions

function add(a, b) {
    return a + b
}

var add2 = (a, b) => {
    return a + b
}

// Limitations

var carObj = {
    name: "BMW",
    year: 2022,
    getName: function () {
        console.log(this.name);
    }
}
carObj.getName()

var add1 = () => {
    console.log(arguments);
}

function add2() {
    console.log(arguments);
}

add1()
add2(1, 3)

const Person = name => {
    this.name = name
}

var ben = new Person("Ben Joe")
console.log(ben);

// Arrow Syntax

// 1. One parameter with simple expression
function add(a) {
    return a
}
console.log(add(2));

const add3 = a => a
console.log(add3(2));

// 2. Multiple parameters with simple expression
const add4 = (a, b) => a + b
console.log(add4(2, 3));

// 3. Multiple statements 
const sum1 = a => {
    let b = 10
    return a + b
}
console.log(sum1(10));

// 4. Multiple statements and multiple parameters
const add5 = (a, b) => {
    let c = 10
    let d = 20
    return a + b + c + d
}

// 5. Immediately return object literal
userObj = {
    name: "John",
    age: 20,
}

const userInfo = user => {
    return {
        name: user.name,
        age: user.age,
    }
}

user = userInfo(userObj)
console.log(user);

// 6. Destructuring obj with arrow function
function displayUser(user) {
    return `Your name is ${user.name}, and age is ${user.age}`
}
console.log(displayUser(userObj));

// 7. Destructuring array with arrow function
const displayUser = ([name, myAge]) => {
    return `${name} ${myAge}`
}
var result = displayUser(["John", 30])

const displayUser = ([name, age] = ["John", 50]) => `${name} ${age}`

const add6 = (a, b = 20) => a + b
var ans = add6(2)

// Anonymous Function
(function (a) {
    return a + 2
})(2)
a => a + 2

// Spread Operator (...) === expand

// spread strings
console.log(..."welcome");

// spread arrays
console.log([..."nodejs"]);

// Combine arrays
var arr1 = [1, 2, 3, 4]
var arr2 = [5, 6, 7, 8]

// traditional
const newArr1 = arr.concat(arr2)

//   modern
const newArr2 = [...arr1, ...arr2]

// mutate
const originalArr = ["Ben", "Joe", "Kimi"]

// copy the original array
const newArr3 = [...originalArr]
console.log("Before pushing", originalArr);

// add new user
originalArr.push("Joe")

console.log("after pushing", newArr3);

// spread objects

const obj1 = {
    name: "John",
    age: 30
}

const obj2 = {
    city: "NY",
    country: "USA"
}

// Traditional way
const newObj = Object.assign({}, obj1, obj2)

// ES5
const newObj2 = {...obj1, ...obj2}