// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*
  db.collection("Todos").findOneAndUpdate({
    _id: new ObjectID("5b3750c832f47144522b124d")
  }, {
    $set:{
      completed: false
    }
  }, {
    returnOriginal: false
  }).then((res)=>{
    console.log(res);
  });
  */
  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5b37541206bddf2a68b8a07f")
  }, {
    $set:{
      name: "Andrew"
    },
    $inc:{
      age:1
    }
  }, {
    returnOriginal: false
  }).then((res)=>{
    console.log(res);
  });

  db.close();
});
