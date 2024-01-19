const mongoose = require("mongoose")

// connect to mongoDB using async await
const connectDB = async () => {
    try {
        mongoose.connect("mongodb+srv://vaibhavsharma5301:Hm0q3nWX4CzunbHj@cluster0.byadrnc.mongodb.net/Error-33?retryWrites=true&w=majority")
        console.log("MongoDB connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
}

connectDB()