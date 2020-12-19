const connection = require("../config/connection");

const getUser = (username) => { 
    const sql = { 
      text: 'SELECT * FROM users where username = $1 ;', 
      values: [username], 
    }; 
    return connection.query(sql); 
  }; 
  
  module.exports = getUser; 