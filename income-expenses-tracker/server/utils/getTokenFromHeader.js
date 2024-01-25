const getTokenFromHeader = req => {
  // get the token from header
  const headerObj = req.headers;
    const token = headerObj["authorization"].split(" ")[1];
    console.log("Token", token);
  if (token !== undefined) {
    return token;
  } else {
    return {
      status: "failed",
      message: "There is no token attached to the header",
    };
  }
};

module.exports = getTokenFromHeader;