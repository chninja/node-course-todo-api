const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


var id = '5b30110c4173dcae196c3131';
if(!ObjectID.isValid(id)){
	console.log('ID not valid');
}


//No need to convert the id into ObjectID in Mongoose
Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
	console.log('Todo By Id', todo);
}).catch((e) => console.log(e));


const {User} = require('./../server/models/user.js');

User.findById('5b30ef23c60815b593edc73e').then((user) => {
	if(!user){
		return console.log('Unable to find user');
	}
	console.log(JSON.stringify(user,undefined, 2));
}, (e) => {
	console.log(e);
})



