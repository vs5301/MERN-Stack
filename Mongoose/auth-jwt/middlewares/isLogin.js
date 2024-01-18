const getTokenFromHeader = require("../utils/getTokenFromHeader")
const verifyToken = require("../utils/verifyToken")

const isLogin = (req, res, next) => {
    // get the token from header
    const token = getTokenFromHeader(req)

    // verify the token
    const decoded = verifyToken(token)
    console.log(decoded);
    if (!decoded) {
        return res.json({
            message: "Invalid/expired token, Please login again",
        })
    }

    // save the user into req objs
    next()
}

module.exports = isLogin