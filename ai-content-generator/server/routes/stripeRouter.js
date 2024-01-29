const express = require("express")

const isAuthenticated = require("../middlewares/isAuthenticated")
const {
    handleStripePayment,
    handleFreeSubscription,
    verifyPayment,
} = require("../controllers/handleStripePayment")

const stripeRouter = express.Router()

// Checkout
stripeRouter.post("/checkout", isAuthenticated, handleStripePayment)

// Free Plan
stripeRouter.post("/free-plan", isAuthenticated, handleFreeSubscription)

// Verify Payment
stripeRouter.post("/verify-payment/:paymentId", isAuthenticated, verifyPayment)

module.exports = stripeRouter