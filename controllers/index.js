module.exports = {
	index(req, res, next) {
		res.render('index', {site: 'dashboard'});
	},
	signin(req, res, next) {
		//TODO
	},
	signout(req, res, next) {
		//TODO
	}
};