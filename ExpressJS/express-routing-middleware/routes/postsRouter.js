const express = require("express")

const postRouter = express.Router()

postRouter.get("/", (req, res) => {
    res.json({
        message: "All posts"
    })
})

module.exports = postRouter