module.exports = {
	index(req, res, next) {
		if (req.isAuthenticated()) {
			res.render('index', {site: 'dashboard', title: 'Jhon Nieves'});
		}
		else {
			res.render('landing', {title: 'Jhon Nieves'});
		}
	},
	signin(req, res, next) {
		res.redirect('/');
	},
	signout(req, res, next) {
		req.logout();
		res.redirect('/');
	}
};