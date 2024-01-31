const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/User")

// Register
const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    // Validate
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are required")
    }

    // Check if email is taken
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    // Hash the user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create the user
    const newUser = new User({
        username,
        password: hashedPassword,
        email,
    })

    // Add the date the trial will end
    newUser.trialExpires = new Date(
        new Date().getTime() + newUser.trialPeriod * 24 * 60 * 60 * 1000
    )

    // Save the user
    await newUser.save()
    res.json({
        status: true,
        message: "Registration was successfull",
        user: {
            username,
            email,
        },
    })
})

// Login
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // check for user email
    const user = await User.findOne({ email })
    if (!user) {
        res.status(401)
        throw new Error("Invalid email")
    }

    // check if password is valid
    const isMatch = await bcrypt.compare(password, user?.password)
    if (!isMatch) {
        res.status(401)
        throw new Error("Invalid password")
    }

    // Generate token (jwt)
    const token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET, {
        expiresIn: "3d",    // token expires in 3 days
    })

    // set the token into cookie (http only)
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,  // 1 day
    })

    // send the response
    res.json({
        status: "success",
        _id: user?._id,
        message: "Login success",
        username: user?.username,
        email: user?.email,
    })
})

// Logout
const logout = asyncHandler(async (req, res) => {
    res.cookie("token", "", { maxAge: 1 })
    res.status(200).json({message: "Logged out successfuly"})
})

// Profile
const userProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req?.user?.id)
        .select("password")
        .populate("payments")
        .populate("contentHistory")
        .populate("username")
        .populate("email")
        .populate("trialExpires")
        .populate("trialActive")
        .populate("subscriptionPlan")
        .populate("monthlyRequestCount")
        .populate("apiRequestCount")
    
    if (user) {
        res.status(200).json({
            status: "success",
            user,
        })
    } else {
        res.status(404)
        throw new Error("User not found")
    }
})

// Check user auth status 
const checkAuth = asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET)
    if (decoded) {
        res.json({
            isAuthenticated: true,
        })
    } else {
        res.json({
            isAuthenticated: false,
        })
    }
})

module.exports = {
    register,
    login,
    logout,
    userProfile,
    checkAuth,
}