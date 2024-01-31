const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.error(`Error connecting to MongoDB ${error.message}`);
        process.exit(1)
    }
}

module.exports = connectDB