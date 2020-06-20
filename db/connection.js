// require mysql
const mysql = require("mysql");
// require dotenv
require("dotenv").config();

const connection = mysql.createConnection({
  // .env file contents here
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`connected at ${PORT}` + connection.threadId);
});

module.exports = connection;
