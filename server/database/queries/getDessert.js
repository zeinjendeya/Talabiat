const connection = require("../config/connection");

const getDessert = (menuID) => {
  const sql = {
    text: "SELECT * FROM desserts where menuID = $1 ;",
    values: [menuID],
  };
  return connection.query(sql);
};

module.exports = getDessert;