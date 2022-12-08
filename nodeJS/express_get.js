var express = require('express');
var app = express();

app.get("/", function (req, res) {
  res.send('Hello World!');
});
//backlog --> max no of queued pending connections, deafult value is 511
//we'll be allowed to write a callback func after listening to the port on which the req is sent
app.listen(8000);
