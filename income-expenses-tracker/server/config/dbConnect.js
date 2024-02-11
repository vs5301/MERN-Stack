const mongoose = require("mongoose")

// connect

const dbConnect = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://vaibhavsharma5301:IielDaOI9EpIuRW5@income-expenses-tracker.szgpmgv.mongodb.net/income-expenses-app?retryWrites=true&w=majority"
        )
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
}

dbConnect()