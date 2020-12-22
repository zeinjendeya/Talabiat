const { verify } = require("jsonwebtoken");
require("env2")("./config.env");

const verifyToken = (token) => {
  return new Promise((res, rej) => {
    verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        rej(err);
      } else {
        res(decoded);
      }
    });
  });
};

module.exports = verifyToken;
