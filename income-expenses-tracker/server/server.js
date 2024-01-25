const express = require('express')
const cors = require("cors")
require("./config/dbConnect")
const usersRoute = require("./routes/users/usersRoute")
const transactionsRoute = require("./routes/transactions/transactionsRoute")
const accountsRoute = require('./routes/accounts/accountsRoute')
const globalErrHandler = require('./middlewares/globalErrHandler')

const app = express()

// middlewares
app.use(express.json()) // pass incoming data

// corse middleware
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Welcome to the Bill to Income/Expenses Tracker API",
        author: "vs5301",
        course: 'This project is part of the "Full Stack Web Development" course on udemy.com',
    })
})

// users routes
app.use('/api/v1/users', usersRoute)

// account routes
app.use('/api/v1/accounts', accountsRoute)

// transaction routes
app.use('/api/v1/transactions', transactionsRoute)

// Error Handlers
app.use(globalErrHandler)

// Listen to server
const PORT = process.env.PORT || 9000
app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`))