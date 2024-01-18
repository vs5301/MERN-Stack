const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const app = express()
const port = 3000
const mongoose = require("mongoose")
const getTokenFromHeader = require("./utils/getTokenFromHeader")
const verifyToken = require("./utils/verifyToken")
const isLogin = require("./middlewares/isLogin")

// connect to mongoose
mongoose.connect("mongodb+srv://vaibhavsharma5301:Hm0q3nWX4CzunbHj@cluster0.byadrnc.mongodb.net/school?retryWrites=true&w=majority")
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err.message))

const userSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  password: String,
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_960_720.jpg",
  },
});

//model
const User = mongoose.model("User", userSchema);

//static files
app.use(express.static(__dirname, +"/public"));

//view engine setup ejs
app.set("view engine", "ejs");

//pass json data
app.use(express.json());

//pass form data
app.use(express.urlencoded({ extended: true }));

// app.use(isLogin);

// JWT

// Generate token
const generateToken = id => {
  return jwt.sign({ id }, "anykey", { expiresIn: "1h" });
};

// routes
app.get("/", (req, res) => {
  res.render("index");
});

// logout
app.get("/logout", (req, res) => {
  res.redirect("/login");
});

// login form
app.get("/login", (req, res) => {
  res.render("login");
});

// Protected
app.get("/protected", (req, res) => {
  //get cookies
  res.render("protected");
});

// login logic
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // Check if username exist
  const userFound = await User.findOne({ username });
  if (!userFound) {
    return res.json({
      msg: "Invalid login credentials",
    });
  }
  // check if password is valid
  const isPasswordValid = await bcrypt.compare(password, userFound.password);
  if (!isPasswordValid) {
    return res.json({
      msg: "Invalid login credentials",
    });
  }

  res.json({
    status: "Success",
    username: userFound.username,
    fullName: userFound.fullName,
    token: generateToken(userFound._id),
  });

  // Verify token

  const verifyToken = token => {};
  // res.redirect(`/profile/${userFound._id}`);
});

// get Register form
app.get("/register", (req, res) => {
  res.render("register");
});

// Register user
app.post("/register", async (req, res) => {
  const { fullName, username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedpass = await bcrypt.hash(password, salt);
  const user = await User.create({
    fullName,
    username,
    password: hashedpass,
  });
  res.redirect("/login");
});

// profile
app.get("/profile/", isLogin, async (req, res) => {
  // get token from headers
  const token = getTokenFromHeader(req);
  // verify token
  const decodedUser = verifyToken(token);

  // make request to fetch the decoded user
  const userDetails = await User.findById(decodedUser.id);
  res.json({
    msg: "Welcome to your profile page",
    status: "Success",
    user: userDetails,
  });
});

// listen
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
})