const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers?.authorization;

  if (token) {
    try {
      const decoded = jwt.verify(token.split(" ")[1], "masai");

      if (decoded) {
        console.log(decoded);
        req.body.authorid = decoded.authorid;

        next();
      } else {
        res.send({ msg: "please login" });
      }
    } catch (err) {
      res.send({ err: err.message });
    }
  } else {
    res.send({ msg: "please login" });
  }
};

module.exports = {
  auth,
};
