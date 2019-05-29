module.exports = {
	userAuth(req, res, next) {
		if (req.isAuthenticated()) {
			next();
		}
		else {
			let err = new Error('Access Denied');
			err.code = 500;
			next(err);
		}
	}
};