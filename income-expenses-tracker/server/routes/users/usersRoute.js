const express = require("express")
const { registerUserCtrl, loginUserCtrl, userProfileCtrl, deleteUserCtrl, updateUserCtrl } = require("../../controllers/users/usersCtrl")
const isLogin = require("../../middlewares/isLogin")

const usersRoute = express.Router()

// POST/api/v1/users/register
usersRoute.post("/register", registerUserCtrl)

// POST/api/v1/users/login
usersRoute.post('/login', loginUserCtrl)

// GET/api/v1/users/profile/:id
usersRoute.get('/profile/:id', isLogin, userProfileCtrl)

// DELETE/api/v1/users/:id
usersRoute.delete('/:id', isLogin, deleteUserCtrl)

// PUT/api/v1/users/:id
usersRoute.put('/:id', isLogin, updateUserCtrl)

module.exports = usersRoute