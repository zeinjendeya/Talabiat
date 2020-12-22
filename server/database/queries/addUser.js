const connection = require('../config/connection');

const addUser = (username, password) => { 
    const sql = { 
      text: 'INSERT INTO users (username, password) values($1 ,$2) returning *;', 
      values: [username, password], 
    }; 
    return connection.query(sql); 
  }; 

  module.exports = addUser; 