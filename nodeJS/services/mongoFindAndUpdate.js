const mongoDB = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const mongoDatabase = new mongoDB.MongoClient(url);
async function findAndUpdate() {
  try {
    await mongoDatabase.connect().then(async () => {
      let query = { $or: [{ role: ["Batsman"] }, { age: 33 }] };
      var coll = mongoDatabase
        .db('assignment')
        .collection('cricketTeam');

      const data = coll.find(query).toArray();
      await data.forEach((data) => {
        let newAge = 34;
        let update = { $set: { age: newAge } };
        mongoDatabase
          .db('assignment')
          .collection('cricketTeam')
          .updateOne(query, update, function (err, data) {
            if (err) {
              console.log('err ' + err);
            }
            console.log(data);
          });
      });
    });
  } catch (err) {
    console.log('Error Occured!' + err);
  } finally {
    await mongoDatabase.close();
  }
}
findAndUpdate();