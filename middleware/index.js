module.exports = {
	isAuthenticated(req, res, next) {
		if (req.isAuthenticated()) {
			next();
		}
		else {
			req.flash('error', 'Please Login First!');
			res.redirect('/');
		}
	},
	isAuthorized(req, res, next) {
		if (req.user.isAdmin) {
			next();
		}
		else {
			let err = new Error('Access Denied');
			err.code = 500;
			next(err);
		}
	}
};