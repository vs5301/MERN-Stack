const mongoose = require("mongoose")
module.exports = mongoose
    .connect("mongodb+srv://vaibhavsharma5301:Hm0q3nWX4CzunbHj@cluster0.byadrnc.mongodb.net/blog-app?retryWrites=true&w=majority")
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err.message))