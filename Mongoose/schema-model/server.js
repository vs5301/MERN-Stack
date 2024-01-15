const mongoose = require("mongoose")

// connect to mongoose
mongoose
    .connect(
        'mongodb+srv://vaibhavsharma5301:Hm0q3nWX4CzunbHj@cluster0.byadrnc.mongodb.net/?retryWrites=true&w=majority'
    ).then(() => console.log('Db connected')
).catch((err) => console.log(err.message))
    
// schema
// name, city, courses
const studentSchema = new mongoose.Schema({
    name: String,
    city: String,
    courses: Array,
    isMarried: Boolean,
    age: Number,
})
// model

const student = mongoose.model("Student", studentSchema)

// create student
/*
    student.create({
        name: "John",
        city: "LA",
        courses: ["Twi"],
        isMarried: false,
        age: 30,
    }).then((student) => console.log(student)
    ).catch((err) => console.error(err))
*/

// find all students
student.find()
    .then((students) => console.log(students))
    .catch((err) => console.log(err))

// find all students whose age = 20
student.find({ age: 20 })
    .then((students) => console.log(students))
    .catch((err) => console.log(err))

// find single record
student.findById("65a4ecb96b600ebbd7f6ceed")
    .then((student) => console.log(student))
    .catch((err) => console.log(err))

// update record
student.findOneAndUpdate(
    { name: "John" },
    { age: 50 },
    { new: true },
).then((student) => console.log(student))
    .catch((err) => console.log(err))

student.findByIdAndUpdate(
    "65a4ecb96b600ebbd7f6ceed",
    { age: 50 },
    { new: true },
).then((student) => console.log(student))
    .catch((err) => console.log(err))

// delete record
student.findByIdAndDelete("65a4e97bc41dfe403f7ad49f")
    .then(() => console.log("Student has been deleted"))
    .catch((err) => console.error(err))