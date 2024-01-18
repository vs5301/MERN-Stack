const jwt = require("jsonwebtoken")

// verify token
const veriToken = token => {
    return jwt.verify(token, "anykey", (err, decoded) => {
        // console.log(decoded)
        if (err) {
            return false
        }
        // return the decoded
        return decoded
    })
}

module.exports = veriToken