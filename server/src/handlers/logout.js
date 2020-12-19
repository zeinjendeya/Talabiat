const logout = (req, res, next) => {
  res
    .clearCookie("token")
    .json({ status: 200, message: "logged out successfully" });
};

module.exports = logout;
