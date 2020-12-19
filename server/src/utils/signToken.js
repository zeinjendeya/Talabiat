const { sign } = require("jsonwebtoken");
require("env2")("./config.env");

const signToken = (userId, userName) => {
  return new Promise((res, rej) => {
    sign({ userId, userName }, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        rej(err);
      } else {
        res(token);
      }
    });
  });
};

module.exports = signToken;
