const getUser = require("./getUser");
const addUser = require("./addUser");
const getDessert = require("./getDessert");
const getDrink = require("./getDrink");
const getSideDish = require("./getSideDish");
const getMeal = require("./getMeal");
const getMenu = require("./getMenu");
const getRestaurant = require("./getRestaurant");
const getRestaurants = require("./getRestaurants");

const { getCustomerByEmail, signupCustomerQuery } = require("./customer");

module.exports = {
  getUser,
  addUser,
  getDessert,
  getDrink,
  getSideDish,
  getMeal,
  getMenu,
  getRestaurant,
  getRestaurants,
  getCustomerByEmail,
  signupCustomerQuery,
};
