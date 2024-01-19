const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://vaibhavsharma5301:Hm0q3nWX4CzunbHj@cluster0.byadrnc.mongodb.net/?retryWrites=true&w=majority")
        console.log("MongoDB connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
}

module.exports = connectDB