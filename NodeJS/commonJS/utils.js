/*
    ways of exporting modules in csjs
    Single Function Export
    Object export
    Named function export
    using export shorthand
*/

//  Single Function Export
const firstname = "Alice"

// Expose this file
const greet = (name) => {
    return `Hello ${name}`
}

// Object export

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

// module.exports = {
//     add,
//     subtract,
// }

// Named function export
// module.exports.sayHi = (name) => {
//     return `Hi ${name}`
// }

// module.exports.sayBye = function (name) {
//     return `Goodbye ${name}`
// }

// Using export shorthand
exports.sayHi = (name) => {
    return `Hi ${name}`
}

exports.sayBye = function (name) {
    return `Goodbye ${name}`
}