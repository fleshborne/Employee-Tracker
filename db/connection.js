// Dependencies here
const util = require("util");
const mysql = require("mysql");

require("dotenv").config();

const connection = mysql.createConnection({
  // .env file contents here
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect();

// use the util here to allow for async/await syntax,
// its good practice to always use promisify when possible
connection.query = util.promisify(connection.query);

module.exports = connection;
