const express = require("express")

const isAuthenticated = require("../middlewares/isAuthenticated")
const { openAIController } = require("../controllers/openAIController")
const checkAPIRequestLimit = require("../middlewares/checkAPIRequestLimit")

const openAIRouter = express.Router()

// Generate Content
openAIRouter.post("/generate-content", isAuthenticated, checkAPIRequestLimit, openAIController)

module.exports = openAIRouter