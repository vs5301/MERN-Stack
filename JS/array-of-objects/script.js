// Array of Objects

// Mutation
var arr = [1, 2, 3, 4, 5]

// push, pop, shift, 
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

// Remove student using findIndex
const studentToRemove = students.findIndex(
    (student) => student.debt == false
)
console.log(studentToRemove);

/*
    // using slice
    if (indexToRemove != -1) {
        students.splice(indexToRemove, 1)
    }
*/

var playlist = [
    { id: "s1", title: "Song 1", artist: "Artist A" },
    { id: "s2", title: "Song 2", artist: "Artist B" },
    { id: "s3", title: "Song 3", artist: "Artist C" },
    { id: "s4", title: "Song 4", artist: "Artist D" },
]

// Remove song of id of s1
const songIndexToRemove = playlist.findIndex(function (song) {
    return song.id === "s2"
})
console.log(songIndexToRemove);

// using splice
if (songIndexToRemove !== -1) {
    playlist.splice(songIndexToRemove, 1)
}

// Move a song of id s1 to third position
const indexToMove = playlist.findIndex((song) => song.id === "s1")
if (indexToMove !== -1) {
    const [songToMove] = playlist.splice(indexToMove, 1)
    playlist.splice(2, 0, songToMove)
}
console.log(playlist);

// insert new song
const newSong = { id: "s5", title: "Song 5", artist: "Artist E" }
playlist.splice(0, newSong)
console.log(playlist);

// concat
const usersArr = [
    {
        id: 1,
        isActive: false,
        name: "Bob",
    },
    {
        id: 2,
        isActive: true,
        name: "Emmanuel",
    },
    {
        id: 3,
        isActive: false,
        name: "Alice",
    },
]
console.log(usersArr);

// Remove inactive user, find index of user to be removed
const indexToRemove = usersArr.findIndex(
    (user) => user.id === 1 && !user.isActive
)

// use splice
if (indexToRemove !== -1) {
    usersArr.splice(indexToRemove, 1)
}
console.log(usersArr);

// updating properties of students in a class
const studentsArr = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
]

// grade updates
const gradeUpdates = [{ grade: "A+" }, { grade: "A" }]

// update the students
const updatedStudents = studentsArr.map((student, index) => {
    return Object.assign({}, student, gradeUpdates[index])
})
console.log(updatedStudents);

// find()
const patients = [
    { id: 101, name: "Sarah", disease: "Cold" },
    { id: 102, name: "Mike", disease: "Fever" },
    { id: 103, name: "Lucy", disease: "Cold" },
]

// Patient with cold
const patientWithCold = patients.find((patient) => patient.disease === "Cold")
console.log(patientWithCold);

const patientWithCold2 = patients.some(
    (patient) => patient.disease === "Cold"
)
console.log(patientWithCold2);

// Search and filter using every()
const students = [
    { id: 1, name: "Bob", grade: "A" },
    { id: 2, name: "Alice", grade: "F" },
    { id: 3, name: "Emma", grade: "A" },
]
const allPassed = students.every((student) => student.grade !== "F")
console.log(allPassed);