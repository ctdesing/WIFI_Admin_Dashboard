const User = require('../models/user');

module.exports = {
	index(req, res, next) {
		res.render('index', {site: 'users', title: 'Jhon Nieves'});
	},
	create(req, res, next) {
		const newUser = new User({
			username: req.body.username,
			email: req.body.username
		});
		User.register(newUser, req.body.password, (err, user) => {
		  if (err) {
		    next(err);
		  }
		  else {
		  	res.redirect('/');
		  }
		});
	},
	profile(req, res, next) {
		//TODO
	},
	edit(req, res, next) {
		//TODO
	},
	update(req, res, next) {
		//TODO
	},
	destroy(req, res, next) {
		//TODO
	}
};