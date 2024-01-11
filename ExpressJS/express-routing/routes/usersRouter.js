const express = require('express')

// Create instance of express router
const userRouter = express.Router()

// Getting all users
userRouter.get("/", (req, res) => {
    res.json({
        message: "All useres fetched",
    })
})

// Getting a user
userRouter.get("/:id", (req, res) => {
    res.json({
        message: "User fetched"
    })
})

// Update user
userRouter.put("/:id", (req, res) => {
    res.json({
        message: "User updated"
    })
})

// Delete user
userRouter.delete("/:id", (req, res) => {
    res.json({
        message: "User deleted"
    })
})

module.exports = userRouter