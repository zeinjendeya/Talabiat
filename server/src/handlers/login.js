const bcrypt = require("bcrypt");

const { validationSchema, boomify, signToken } = require("../utils/index");
const { getUser } = require("../../database/queries/index");

const login = (req, res, next) => {
  let id;
  let userName;
  const { username, password } = req.body;
  validationSchema
    .validateAsync({ username, password })
    .catch((err) => {
      throw boomify(400, err.details[0].message);
    })
    .then(() => getUser(username))
    .then(({ rowCount, rows }) => {
      if (rowCount === 0) {
        throw boomify(400, "username doesn't exist");
      }

      const user = rows[0];
      userName = user.username;
      id = user.id;

      return bcrypt.compare(password, user.password);
    })
    .then((isAuth) => {
      if (!isAuth) {
        throw boomify(400, "incorrect information, check again");
      }
      return signToken(id, userName);
    })
    .then((token) =>
      res
        .cookie("token", token)
        .json({ status: 200, message: "logged in successfully" })
    )
    .catch(next);
};

module.exports = login;
