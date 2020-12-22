const connection = require("../config/connection");

const getRestaurant = (restaurantID) => {
  const sql = {
    text: "SELECT * FROM restaurants where id = $1 ;",
    values: [restaurantID],
  };
  return connection.query(sql);
};

module.exports = getRestaurant;