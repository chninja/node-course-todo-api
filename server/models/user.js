//User
//email - require it - trim it - set type - set min lenght of 1



var mongoose = require('mongoose');

var User = mongoose.model('User', {

	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}

});


module.exports = {User};

// var user = new User ({
// 	email: 'andrew@gmail.com'
// });

// user.save().then((doc) =>{
// 	console.log('User save', doc);
// }, (e) => {
// 	console.log('Unable to save');
// })
