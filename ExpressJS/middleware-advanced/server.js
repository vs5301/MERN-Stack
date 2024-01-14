const express = require("express")
const app = express()
const morgan = require("morgan")

// Use Morgan Middleware
app.use(morgan("dev"))

/*
    // Create Middleware
    const logger = (req, res, next) => {
        // any logic
        console.log("Logger middleware");
        next()
    }

    // Use Middleware
    app.use(function (req, res, next) {
        console.log("Logger Middleware");
        next()
    })
*/

/*
    // Chaining middlewares
    app.use((req, res, next) => {
        console.log('First middleware');
        next()
    }).use((req, res, next) => {
        console.log('Second middleware');
        next()
    }).use((req, res, next) => {
        console.log('Third middleware');
        next()
    })
*/

// Protected Route Middleware
const protected = (req, res, next) => {
    let userLoginDetails = {
        isLogin: false,
        username: "John",
    }
    if (userLoginDetails.isLogin) {
        next()
    } else {
        return res.json('You must login')
    }
}

// isAdmin middleware
const isAdmin = (req, res, next) => {
    let userLoginDetails = {
        isLogin: true,
        username: "John",
        isAdmin: false,
    }
    if (userLoginDetails.isAdmin) {
        next()
    } else {
        return res.json('You are not admin')
    }
}

app.use(isAdmin)

// Home route
app.get("/", (req, res) => {
    res.send("Hello World!")
})

// Login route
app.post("/login", (req, res) => {
    res.send("Login Successful")
})

// @Role: Authenticated User
// create post request
app.post("/create-post", protected, (req, res) => {
    res.json({
        message: "Post Created"
    })
})

// @Role: Public Use
// Fetch all posts
app.get("/posts", (req, res) => {
    res.json({
        message: "Posts Fetched"
    })
})

// @Role: Admin
// delete post
app.delete("/posts/:id", protected, isAdmin, (req, res) => {
    res.json({
        message: "Post Deleted"
    })
})

// Start the server
app.listen(9000, console.log(`Server is running on port http://localhost:${9000}`))