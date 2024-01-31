const express = require('express')
const cookieParser = require("cookie-parser")
const cron = require("node-cron")
const cors = require("cors")
require("dotenv").config()
const usersRouter = require("./routes/usersRouter")
const { errorHandler } = require("./middlewares/errorMiddleware")
const openAIRouter = require("./routes/openAIRouter")
const stripeRouter = require("./routes/stripeRouter")
const User = require("./models/User")
require("./utils/connectDB")()

const app = express()
const PORT = process.env.PORT || 9000

// Cron for the trial period : run every single
cron.schedule("0 0 * * * *", async () => {
    try {
        // get the current date
        const today = new Date()
        const updatedUser = await User.updateMany(
            {
                trialActive: true,
                trialExpires: { $lt: today },
            },
            {
                trialActive: false,
                subscriptionPlan: "Free",
                monthlyRequestCount: 5,
            }
        )
    } catch (error) {
        console.error(error.message);
    }
})

// Cron for the Free plan: run at the end of every month
cron.schedule("0 0 1 * * *", async () => {
    try {
        // get the current date
        const today = new Date()
        await User.updateOne(
            {
                subscriptionPlan: "Free",
                nextBillingDate: { $lt: today },
            },
            {
                monthlyRequestCount: 0,
            }
        )
    } catch (error) {
        console.error(error.message);
    }
})

// Cron for the Basic plan: run at the end of every month
cron.schedule("0 0 1 * * *", async () => {
    try {
        // get the current date
        const today = new Date()
        await User.updateMany(
            {
                subscriptionPlan: "Basic",
                nextBillingDate: { $lt: today },
            },
            {
                monthlyRequestCount: 0,
            }
        )
    } catch (error) {
        console.error(error);
    }
})

// Cron for the Premium plan: run at the end of every month
cron.schedule("0 0 1 * * *", async () => {
    try {
        // get the current date
        const today = new Date()
        await User.updateMany(
            {
                subscriptionPlan: "Premium",
                nextBillingDate: {$lt: today},
            },
            {
                monthlyRequestCount: 0,
            }
        )
    } catch (error) {
        console.log(error);
    }
})


// middlewares
app.use(express.json()) // pass incoming json data
app.use(cookieParser()) // pass the cookie automatically
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
}
app.use(cors(corsOptions))

// Routes
app.use("/api/v1/users", usersRouter)
app.use("/api/v1/openai", openAIRouter)
app.use("/api/v1/stripe", stripeRouter)

// Error handler middleware
app.use(errorHandler)

app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Welcome to AI Content Generator API",
        author: "vs5301",
        course: 'This project is part of the "Full Stack Web Development" course on udemy.com',
    })
})

// start the server
app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))