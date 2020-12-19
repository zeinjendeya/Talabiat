const connection = require("../config/connection");

const getDrink = (menuID) => {
  const sql = {
    text: "SELECT * FROM drinks where menuID = $1 ;",
    values: [menuID],
  };
  return connection.query(sql);
};

module.exports = getDrink;