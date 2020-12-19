const { verifyToke, boomify } = require("../utils");

const auth = (req, res, next) => {
  const { token } = req.cookies;

  verifyToke(token)
    .then(({ userId, userName }) => {
      req.userId = userId;
      req.userName = userName;
      next();
    })
    .catch(() => {
      res.clearCookie("token");
      next(boomify(401, "Unauthorized"));
    });
};

module.exports = auth;
