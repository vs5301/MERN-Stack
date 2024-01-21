const mongoose = require("mongoose")

// set the strictQuery
mongoose.set('strictQuery', false)

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected successfully");
    } catch (error) {
        console.error("DB connection failed", error.message);
    }
}

dbConnect()