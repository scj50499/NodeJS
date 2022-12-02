var mysql = require('mysql');//import mysql module for db connection
var mongo = require('mongodb');
var redis = require('redis');
//specific to your project DB
var con = mysql.createConnection({
  host: "localhost",//your project hostname to which your system has access
  user: "yourusername",//username to connect with the db
  password: "yourpassword"//password to connect to DB
});

var con1 = mongo.createConnection({
    host: "localhost",//your project hostname to which your system has access
    user: "yourusername",//username to connect with the db
    password: "yourpassword"//password to connect to DB
  });

var con2 = redis.createConnection({
    host: "localhost",//your project hostname to which your system has access
    user: "yourusername",//username to connect with the db
    password: "yourpassword"//password to connect to DB
  });

//connects with the above mentioned DB details
con.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

con2.connect((e) => {
  if (e) throw e;
  console.log("Redis Connected!");
  con.query("SET employee", (err, result) => {
    if (err) throw err;
    console.log("Database created");
  });
});