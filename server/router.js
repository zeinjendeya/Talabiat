require("env2")("config.env");
const router = require("express").Router();

const { boomify, errorHandler } = require("./src/utils");
const { signup, login, logout } = require("./src/handlers");
const {auth} = require('./src/middlewares/auth');

//router.post('/sign-up', signup);
//router.post('/log-in', login);

router.use(auth);

//router.get('/log-out', logout);

router.use((req, res, next) => {
  next(boomify(404, "resource not found"));
});
router.use(errorHandler);

module.exports = router;
