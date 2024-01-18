const express = require('express')
const bcrypt = require("bcryptjs")
const session = require('express-session')
const MongoStore = require('connect-mongo')
const app = express()
const port = 3000
const mongoose = require('mongoose')

// connect to mongoose
mongoose.connect("mongodb+srv://vaibhavsharma5301:Hm0q3nWX4CzunbHj@cluster0.byadrnc.mongodb.net/school?retryWrites=true&w=majority")
    .then(() => console.log("Db connected"))
    .catch(err => console.log(err.message))

const userSchema = new mongoose.Schema({
    username: String,
    fullName: String,
    password: String,
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_960_720.jpg"
    },
})

// model
const User = mongoose.model("User", userSchema)

// configure session
app.use(session({
    secret: "ldjlsdj04iwoldklskd",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    store: new MongoStore({
        mongoUrl: "mongodb+srv://vaibhavsharma5301:Hm0q3nWX4CzunbHj@cluster0.byadrnc.mongodb.net/school?retryWrites=true&w=majority",
        ttl: 24 * 60 * 60,  // 1 day
    }),
}))

// static files
app.use(express.static(__dirname, +"/public"))
// or
// Virtual Path Prefix '/static'
// app.use("/static", express.static("public"))

// view engine setup ejs
app.set("view engine", "ejs")

// pass json data
app.use(express.json())

// pass form data
app.use(express.urlencoded({ extended: true }))

// Cookies

// send cookie to the client
app.get("/send-cookie", (req, res) => {
    // send cookie
    res.cookie("name", "John", {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 7     // 7 days
    })
    res.send("Cookie sent")
})

// auth middleware
const protected = (req, res, next) => {
    if (!req.session.loginUser) {
        return res.render("notAllowed")
    }
    next()
}

// routes
app.get("/", (req, res) => {
    console.log(req.session);
    // add login user
    console.log(req.session);
    res.render("index")
})

// logout
app.get("/logout", (req, res) => {
    req.session.destroy()
    res.redirect("/login")
})

// login form
app.get("/login", (req, res) => {
    res.render("login")
})

// protected
app.get("/protected", protected, (req, res) => {
    // get cookies
    res.render("protected")
})

// login logic
app.post("/login", async (req, res) => {
    const { username, password } = req.body

    // check if username exist
    const userFound = await User.findOne({ username })
    if (!userFound) {
        return res.json({
            msg: "Invalid login credentials",
        })
    }

    // check if password is valid
    const isPasswordValid = await bcrypt.compare(password, userFound.password)
    if (!isPasswordValid) {
        return res.json({
            msg: "Invalid login credentials",
        })
    }

    // save the login user into session
    req.session.loginUser = userFound
    res.redirect(`/profile/${userFound._id}`)
})

// logout
/*
    app.get("/logout", (req, res) => {
        // delete the cookies
        res.clearCookie("fullname")
        res.clearCookie("username")
        res.clearCookie("fullname")
        res.redirect("/login")
    })
*/

// get Register form
app.get("/register", (req, res) => {
    res.render("register")
})

// register user
app.post("/register", async (req, res) => {
    const { fullName, username, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(password, salt)
    const user = await User.create({
        fullName,
        username,
        password: hashedpass,
    })

    // store username and password inside the cookies
    res.cookie("username", user.username)
    res.cookie("fullname", user.fullName)
    res.redirect("/login")
})

// profile
app.get("/profile/:id", protected, async (req, res) => {
    // find the user by id
    const user = await User.findById(req.params.id)
    console.log(req.params.id);
    console.log(user);
    res.render("profile", { user })
})

// listen
app.listen(port, () => {
    console.log(`Server is started at http://localhost:${port}`);
})