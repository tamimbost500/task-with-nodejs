const jwt = require("jsonwebtoken");

exports.verifiToken = async (req, res, next) => {
  const token = req.headers.authorization;
  // console.log("token", token);
  if (!token) {
    return res.send({ error: "unauthorised access" });
  }
  jwt.verify(token, "secret", function (err, decoded) {
    // console.log("decoded", decoded);
    // console.log(err);
    if (err) {
      return res.send({ error: "unauthorised access error" });
    }
    req.userEmail = decoded.email;
    req.userId = decoded.userId;
    next();
  });
};
