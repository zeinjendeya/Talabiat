const connection = require("../config/connection");

const getRestaurants = (restaurantName) => {
  const sql = {
    text: "SELECT * FROM restaurants",
  };
  return connection.query(sql);
};

module.exports = getRestaurants;
