const express = require("express")
const AppErr = require(".utils/AppErr")
require("./config/dbConnect")
const Post = require("./model/Post")
const handleValidationErrDB = require("./utils/handlerErrValidationDB")
const handleCastErr = require("./utils/handleCastErr")
const globalErrHandler = require("./middleware/globalErrHandler")
const app = express()

app.use(express.json())

// POST /posts
app.post("/posts", async (req, res, next) => {
    try {
        const post = await Post.create(req.body)
        res.json(post)
    } catch (error) {
        next(handleValidationErrDB(error))
    }
})

// GET /posts/:id
app.get("/posts/:id", async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (error) {
        next(handleCastErr(error))
    }
})

// GET /
app.get("/", (req, res, next) => {
    let networkIsLive = false
    if (!networkIsLive) {
        const err = new AppErr("Network Error", 500)
        return next(err)
    }
    res.json({
        message: "Welcome to Error Handling"
    })
})

// GET /profile
app.get("/profile", (req, res, next) => {
    let isLogin = false
    if (!isLogin) {
        const err = new AppErr("You are not logged in", 401)
        return next(err)
    }
    res.json({
        message: "Welcome to Profile page"
    })
})

// 404 error handling
app.all("*", (req, res, next) => {
    const err = new AppErr(`${req.originalUrl} not found`, 404)
    next(err)
})

// Global error handling middleware
app.use(globalErrHandler)

// Start the server
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})

process.on("unhandledRejection", (err, promise) => {
    console.log(`${err.name} ${err.message}`);
    server.close(() => process.exit())
})