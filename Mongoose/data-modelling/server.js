// database connection
require("./utils/dbConnect")
const express = require("express")
const postRouter = require("./routes/postRoute")
const userRouter = require("./routes/usersRoute")
const app = express()

// Middleware
app.use(express.json())

app.use("/users", userRouter)
app.use("/posts", postRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})