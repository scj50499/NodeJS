const client = require('./clientDB');
const express = require('express');

const app = express();


app.get("/users", function (req, res) {
    (async function() {
        try {
            console.log('Accessed clientDB module');
            // Substitute your db and collection names here...
            const db = await client.db('employee');
            const cursor = await db.collection('manager').find();
            let result = [];
            while(await cursor.hasNext()) {
                let doc = await cursor.next();
                result.push(doc);
            }
            res.send(result);
        } catch (err) {
            throw err;
        }
        finally{
            await client.close();
        }
    })();
  });

  app.listen(8000);