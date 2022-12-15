var express = require('express');
var app = express();

app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });
//backlog --> max no of queued pending connections, deafult value is 511
//we'll be allowed to write a callback func after listening to the port on which the req is sent
app.listen(8000);