const express = require("express");
const app = express();
const PORT = 8082;

// Built In Middlewares

// serve static files
app.use(express.static('public'))

// pass incoming data
app.use(express.json())
app.use(express.urlencoded())

// App Level Middlewares

// Logging details of every request
const logRequest = (req, res, next) => {
  console.log(
    `Request recieved at: ${new Date().toISOString()} for ${req.method} to ${req.path}`
  );

  // call next
  next()
}
app.use(logRequest)

//Home Route
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to this app",
    data: "Masynctech",
  });
});

// Create a book
app.post("/books", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Built in middlewares demo",
  });
});

// Router Level Middleware
app.use("/users", (req, res, next) => {
  console.log("Middleware specific to paths with /users executed");
  next()
})

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to router level middleware"
  })
})

// Profile Route
app.get("/profile", (req, res) => {
  res.json({
    message: "This is a profile route"
  })
})

// Settings Route
app.get("/settings", (req, res) => {
  res.json({
    message: "This is a settings route"
  })
})

// Get all Users Route
app.get("/users", (req, res) => {
  res.json({
    message: "Get all users route"
  })
})

// Register Users Route
app.post("/users/register", (req, res) => {
  res.json({
    message: "Register users route"
  })
})

// Login Users Route
app.post("/users/login", (req, res) => {
  res.json({
    message: "Login users route"
  })
})


// Error Handling Middleware
app.get("/cause-error", (req, res, next) => {
  const error = new Error("Login failed")
  next(error)
})

// Error Handling Middleware
app.use((error, req, res, next) => {
  console.log(error);
  res.json({
    status: "error", 
    message: error.message
  })
})

//Start the server
app.listen(PORT, console.log(`Server is running on port http://localhost:${PORT}`));