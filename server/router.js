require("env2")("config.env");
const router = require("express").Router();

const { boomify, errorHandler } = require("./src/utils");
const { signup, login } = require("./src/handlers");

//router.post('/sign-up', signup);
//router.post('/log-in', login);

router.use((req, res, next) => {
  next(boomify(404, "resource not found"));
});
router.use(errorHandler);

module.exports = router;
