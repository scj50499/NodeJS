var express = require('express'); 
// => Requires the Express module just as you require other modules and and puts it in a variable.

var app = express(); 
// => Calls the express function "express()" and puts new Express application inside the app variable 
// (to start a new Express application). It's something like you are creating an object of a class. Where "express()" 
// is just like class and app is it's newly created object.

app.get("/", (req, res) => {
    res.send('Successful response.');
  });

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host);
    console.log(port);
    console.log("application runs at http://", host, port);
})