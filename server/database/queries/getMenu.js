const connection = require("../config/connection");

const getMenu = (restaurantID) => {
  const sql = {
    text: "SELECT * FROM menus where restaurantID = $1 ;",
    values: [restaurantID],
  };
  return connection.query(sql);
};

module.exports = getMenu;