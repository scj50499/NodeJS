var express = require('express');
var app = express();
const {server} = require('./server_utility');

app.get("/", (req, res) =>{
    console.log("GET");
    res.send("Hello from get at root");
});

app.get("/students", (req, res) => {
    console.log("Hello Students");
    res.send("Hello from get at Students");
})

app.get("/ab*cd", (req, res) => {
    console.log("Wildcard URL");
    res.send("Hello from wildcard");
})

app.post("/", (req, res) => {
    console.log("POST");
    res.send("Hello from post at Root");
});

app.delete("/del_student", (req, res) =>{
    console.log("Delete request");
    res.send("Delete me")
});

server(app);




