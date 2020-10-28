// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "zy4wtsaw3sjejnud.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "n4lcr32w49wbmtu3",
  password: "fwybhggfrjfipire",
  database: "v03fkkierwar5rl0"
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;