// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.deleteMany
  /*
  db.collection("Todos").deleteMany({text:"Eat lunch"}).then((result)=>{
    console.log(result);
  });
  */
  // deleteOne
  /*
  db.collection("Todos").deleteOne({text:"Eat lunch"}).then((result)=>{
    console.log(result);
  });
  */
  // findOneAndDelete
  /*
  db.collection("Todos").findOneAndDelete({text:"Eat lunch"}).then((res)=>{
    console.log(res);
  });
  */
  db.collection("Users").deleteMany({name:"Andrew"}).then((result)=>{
    console.log(result);
  });
  db.collection("Users").findOneAndDelete({_id:new ObjectID("5b37541a06bddf2a68b8a081")}).then((res)=>{
    console.log(res);
  });


  db.close();
});
