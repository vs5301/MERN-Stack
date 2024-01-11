const express = require('express')

// Create instance of express router
const userRouter = express.Router()

// Using the route()

// Getting all users
userRouter.get("/", (req, res) => {
    res.json({
        message: "All useres fetched",
    })
})

// Getting all users
userRouter.route("/").get((req, res) => {
    res.json({
        message: "All users fetched"
    })
})

// Handle a specific user id
userRouter
    .route("/:id")
    .get((req, res) => {
        res.json({
            message: "Users fetched"
        })
    })
    .put((req, res) => {
        res.json({
            message: "Users updated"
        })
    })
    .delete((req, res) => {
        res.json({
            message: "User deleted"
        })
    })

module.exports = userRouter