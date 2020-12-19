const { Pool } = require("pg");
require("env2")("./config.env");
let dbUrl = "";

switch (process.env.NODE_ENV) {
  case "production":
    dbUrl = process.env.DATABASE_URL;
    break;
  case "development":
    dbUrl = process.env.DB_URL;
    break;
  default:
    console.log("no data");
    break;
}

if (!dbUrl) console.log("url not found");

const options = {
  connectionString: dbUrl,
  ssl: false,
};

module.exports = new Pool(options);
