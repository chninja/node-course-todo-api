// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//es6 object destructuring

var user = {name: 'andrew', age:25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	} 
	console.log('Connected to MongoDB server');
	// _id: new ObjecetID('fsdfsdf'); in the find
	// db.collection('Todos').find({complete:false}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });


	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count:${count}`);
	
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find().toArray().then((docs) => {
		console.log(`Users`);
		console.log(JSON.stringify(docs, undefined, 2));
	
	}, (err) => {
		console.log('Unable to fetch Users', err);
	});


	db.collection('Users').find().count().then((count) => {
		console.log(`Users count:${count}`);
	
	}, (err) => {
		console.log('Unable to fetch Users', err);
	});

	// db.close();
}); 



