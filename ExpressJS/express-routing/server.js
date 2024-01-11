const express = require("express")
const userRouter = require("./routes/usersRouter")
const postRouter = require("./routes/postsRouter")
const app = express()
const PORT = 8082

// Home Route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the main app",
    })
})

// Users Route
app.use("/users", userRouter)

// Posts Route
app.use("/posts", postRouter)

// Start the server
app.listen(PORT, console.log(`Server is running on port http://localhost:${PORT}`))

