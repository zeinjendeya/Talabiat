const connection = require("../config/connection");

const getRestaurant = (restaurantName) => {
  const sql = {
    text: "SELECT * FROM restaurants where restaurantName = $1 ;",
    values: [restaurantName],
  };
  return connection.query(sql);
};

module.exports = getRestaurant;