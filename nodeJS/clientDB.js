const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url, { useUnifiedTopology: true } );


client.connect(function(err, data) {
    if(err) console.log("Couldn't connect !!!!!");
	console.log('Connected successfully to server');
});

module.exports = client;