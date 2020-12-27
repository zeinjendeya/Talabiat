require("env2")("config.env");
const router = require("express").Router();

const { boomify, errorHandler } = require("./src/utils/index");
const {
  signup,
  login,
  logout,
  handleRestaurants,
  handleMenu,
} = require("./src/handlers/index");
const auth = require("./src/middlewares/auth");

router.post("/signup", signup);
router.post("/login", login);

//router.use(auth);

router.get("/logout", logout);
router.get("/restaurants", handleRestaurants);
router.get("/restaurants/:restaurantID/menu" , handleMenu);

router.use((req, res, next) => {
  next(boomify(404, "resource not found"));
});
router.use(errorHandler);

module.exports = router;
