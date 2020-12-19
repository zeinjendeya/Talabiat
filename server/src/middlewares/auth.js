const { use } = require("../../router");
const { verifyToken, boomify } = require("../utils/index");

const auth = (req, res, next) => {
  const { token } = req.cookies;
  verifyToken(token)
    .then(({ userId, userName }) => {
      req.userId = userId;
      req.userName = userName;
      next();
    })
    .catch(() => {
      next(boomify(401, "unauthorized"));
    });
};

module.exports = auth;
