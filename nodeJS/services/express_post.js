var express = require('express');
var app = express();

app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });
//backlog --> max no of queued pending connections, deafult value is 511
//we'll be allowed to write a callback func after listening to the port on which the req is sent
app.listen(3000, function(){
    console.log("running!!!");
});