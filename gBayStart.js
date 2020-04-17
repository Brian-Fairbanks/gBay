var mysql = require("mysql");
var sqlPassword = require("./password.js");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: sqlPassword.sql(),
  database: "bidding_db"
});

connection.connect(function (err) {
  if (err) throw err;
  //console.log("connected as id " + connection.threadId);
});


function queryAllItems() {
  connection.query("SELECT * FROM items", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].item + " | " + res[i].current - bid);
    }
    console.log("-----------------------------------");
  });
}

function queryCurrentBids() {
  var query = connection.query("SELECT * FROM items WHERE current_bid=true", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].item + " | " + res[i].current - bid);
    }
  });

  // logs the actual query being run
  console.log(query.sql);
}

module.exports = {
  queryAllItems: ()=> queryAllItems(),
  queryCurrentBids: ()=> queryCurrentBids()
};

