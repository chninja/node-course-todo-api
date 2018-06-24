// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//es6 object destructuring

var user = {name: 'andrew', age:25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>{
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	} 
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) =>{
	// 	if(err) {
	// 		return console.log('Unabe to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));

	// });


	// // Insert new doc into the Users (name, age, location)
	// db.collection('Users').insertOne({
	// 	name: 'Catherine',
	// 	age: 30,
	// 	location: 'Fredericton'
	// }, (err, result) =>{
	// 	if(err) {
	// 		return console.log('Unabe to insert todo', err);
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// 	console.log(JSON.stringify(result.ops, undefined, 2));

	// });

	client.close();
}); 



