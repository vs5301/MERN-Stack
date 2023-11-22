// Ways of creating a function
// function decleration
// function expression

function sayHello() {
    console.log("Hello");
}

sayHello()

let greeting = function () {
    console.log("Good morning");
}

greeting()

const addNum = function(x, y) {
    let result = x + y
    console.log(result);
}

addNum(2, 3)

function multiplyNum(a, b, c) {
    let result = a * b * c
    console.log(result);
}

multiplyNum(1, 2, 3)

function subtractNum(x, y) {
    let result = x - y
    return result
}

alert(subtractNum(5,2));