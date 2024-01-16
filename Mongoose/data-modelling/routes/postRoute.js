const express = require("express")
const Post = require("../models/Post")
const User = require("../models/User")
const postRouter = express.Router()

// POST /posts
postRouter.post("/", async (req, res) => {
    try {
        const savedPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
        })

        // Find the user
        const userFound = await User.findById(req.body.author)
        if (!userFound) {
            return res.json({ msg: "User not found" })
        }
        // Save the created post into the users posts field
        userFound.posts.push(savedPost)
        // Re save
        await userFound.save()
        res.json(savedPost)
    } catch (err) {
        res.json({message: err})
    }
})

// GET /posts
postRouter.get("/", async (req, res) => {
    try {
        const posts = await Post.find().populate({
            path: "author",
            populate: {
                path: "posts",
                model: "Post",
            },
        })
        res.json(posts)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = postRouter