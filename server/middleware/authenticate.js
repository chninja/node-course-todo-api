
console.log('important');





var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
  var token = req.header('x-auth');
  	console.log('1');
  User.findByToken(token).then((user) => {
    if (!user) {
    		console.log('2');
      return Promise.reject();
    }
    	console.log('3');
    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
  		console.log('4');
    res.status(401).send();
  });
};

module.exports = {authenticate};