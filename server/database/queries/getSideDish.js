const connection = require("../config/connection");

const getSideDish = (menuID) => {
  const sql = {
    text: "SELECT * FROM sideDishes where menuID = $1 ;",
    values: [menuID],
  };
  return connection.query(sql);
};

module.exports = getSideDish;