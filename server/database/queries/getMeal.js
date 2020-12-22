const connection = require("../config/connection");

const getMeal = (menuID) => {
  const sql = {
    text: "SELECT * FROM meals where menuID = $1 ;",
    values: [menuID],
  };
  return connection.query(sql);
};

module.exports = getMeal;