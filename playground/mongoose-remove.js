const {mongoose} = require("./../server/db/mongoose");
const {ObjectID} = require("mongodb");

const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

/*
var id = "5b379cee7be9286e7272e7bc";

if(!ObjectID.isValid(id)){
  return console.log("Id not valid");
}
*/
/*
Todo.remove({

}).then((result)=>{
  console.log("result: ", result);
});
*/
Todo.findByIdAndRemove("5b38b9c178569e2a2111a5dc").then((todo)=>{
  console.log("todo: ", todo);
});


/*
Todo.removeOne({
  _id:id
}).then((todo)=>{
  console.log("todo: ", todo);
});
*/
