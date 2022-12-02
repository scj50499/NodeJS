const client = require('./clientDB');

(async function() {
	try {
		console.log('Accessed clientDB module');
		// Substitute your db and collection names here...
		const db = await client.db('employee');
		const cursor = await db.collection('manager').find();
		while(await cursor.hasNext()) {
			let doc = await cursor.next();
			console.log(doc);
		}
	} catch (err) {
		console.log(err.stack);
	}

	client.close(); // Close db connection
	console.log('Connection closed.');
})();