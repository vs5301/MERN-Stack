// Array of Objects

// Mutation
var arr = [1, 2, 3, 4, 5]

// push, pop, shift, concat, 
arr.push(6)
console.log(arr);
arr.pop(6)
console.log(arr);

// forEach
var students = [
    { name: "John", age: 20, debt: true },
    { name: "Mary", age: 26, debt: false },
    { name: "Peter", age: 22, debt: true },
    { name: "Sally", age: 23, debt: false},
]

students.forEach(user => {
    console.log("name: ", user.name);
    console.log("age: ", user.age);
})

// map
var newStudents = students.map(user => {
    return user.name
})
console.log(newStudents);

// filter
var debtStudents = students.filter((student) => {
    return student.age < 26
})
console.log(debtStudents);

// reduce
var products = [
    { name: "banana", price: 1 },
    { name: "orange", price: 2 },
    { name: "apple", price: 3 },
    { name: "pear", price: 4 },
]

var productSum = products.reduce(function (total, product) {
    return total + product.price
}, 0)
console.log(productSum);