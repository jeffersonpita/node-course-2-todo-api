const {mongoose} = require("./../server/db/mongoose");
const {ObjectID} = require("mongodb");

const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");


var id = "5b379cee7be9286e7272e7bc";

if(!ObjectID.isValid(id)){
  return console.log("Id not valid");
}

/*
Todo.find({
  _id:id
}).then((todos)=>{
  console.log("todos: ", todos);
});

Todo.findOne({
  _id:id
}).then((todo)=>{
  console.log("todo: ", todo);
});
*/
/*
Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log("Id not found");
  }
  console.log("todoById: ", todo);
}).catch((e)=>console.log(e));
*/

User.findById(id).then((user)=>{
  if(!user){
    return console.log("Id not found");
  }
  console.log("userById: ", user);
}, (e)=> {
  console.log("Error: ", e);
}).catch((e)=>console.log(e));
