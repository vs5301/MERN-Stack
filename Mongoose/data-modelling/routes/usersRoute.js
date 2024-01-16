const express = require("express")
const User = require("../models/User")
const userRouter = express.Router()

// POST /users
userRouter.post("/", async (req, res) => {
    try {
        const user = await User.create({
            fullName: req.body.fullName,
            country: req.body.country,
        })
        res.json(user)
    } catch (error) {
        res.json({
            message: err
        })
    }
})

// GET /users
userRouter.get("/", async (req, res) => {
    try {
        const users = await User.find().populate("posts")
        res.json(users)
    } catch (error) {
        res.json({
            message: err
        })
    }
})

module.exports = userRouter