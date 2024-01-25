const { AppErr } = require("../utils/appErr");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  //get token from req header
  const token = getTokenFromHeader(req);
  console.log("isLogin token ", token);
  //verify
  const decodedUser = verifyToken(token);
  console.log("Decoded user", decodedUser);
  //save the user into req obj
  req.user = decodedUser.id;
  console.log("req.user: ", req.user);
  if (!decodedUser) {
    return next(new AppErr("Invalid/Expired Token, Please login again", 401));
  }
  next();
};

module.exports = isLogin;