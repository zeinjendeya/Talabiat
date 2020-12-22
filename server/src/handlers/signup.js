const bcrypt = require("bcrypt");

const { validationSchema, boomify } = require("../utils/index");
const { getUser, addUser } = require("../../database/queries/index");

const signup = (req, res, next) => {
  const { username, name, password, confirmedPassword } = req.body;
  validationSchema
    .validateAsync({ username, name, password, confirmedPassword })
    .catch((err) => {
      throw boomify(400, err.details[0].message);
    })
    .then(() => getUser(username))
    .then(({ rowCount, rows }) => {
      if (rowCount > 0) {
        throw boomify(409, "username already in use");
      }
      return bcrypt.hash(password, 10);
    })
    .then((hashedPassword) => addUser(username, hashedPassword))
    .then(() => {
      res.status(201).json({ status: 201, message: "signed up successfully" });
    }).catch(next)
};

module.exports = signup;
