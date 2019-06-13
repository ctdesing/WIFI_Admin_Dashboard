const mysql = require('mysql'),
			passport = require('passport'),
			User = require('../models/user'),
			{ lastSevenDays } = require('../table');

//DATABASE CONNECTION MYSQL
var connection = mysql.createConnection({
  host     : 'jancxdashboard.ddns.net',
  port     : '4381',
  user     : 'jancx',
  password : '0100111001'
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
  }
  else
    console.log('connected as id ' + connection.threadId);
});

module.exports = {
	//
	index(req, res, next) {
		if (req.isAuthenticated()) {
			//DASHBOARD
			var q = "SELECT COUNT(*) FROM users";
			connection.query(q, function(err, results){
				if (err) next(err);
  			console.log(results);
  			// var count = results[0].count;
  			// console.log("We have " + count + "users in our db");
			});
			res.render('index', {site: 'dashboard', title: 'Jhon Nieves'});
		}
		else {
			res.render('landing', {title: 'Jhon Nieves'});
		}
	},
	//
	signin(req, res, next) {
		passport.authenticate('local', function(err, user, info) {
		if (err) {
			next(err);
		}
		else {
			if (!user) {
				req.flash('error', 'Username or Password incorrect, please try again.');
				res.redirect('/');
			}
			else {
				req.logIn(user, function(err) {
					if (err) {
						next(err);
					}
					else {
						res.redirect('/');
					}
				});
			}
		}
	})(req, res, next);
	},
	//
	signout(req, res, next) {
		req.logout();
		res.redirect('/');
	},
	//
	trafficVolume(req, res, next) {
		res.render('index', {site: './users/trafficvolume', title: 'Jhon Nieves'});
	},
	//
	dataUsage(req, res, next) {
		res.render('index', {site: './users/datausage', title: 'Jhon Nieves'});
	},
	//
	uniqueLines(req, res, next) {
		res.render('index', {site: './users/uniquelines', title: 'Jhon Nieves'});
	},
	//
	venues(req, res, next) {
		res.render('index', {site: './administrators/venues', title: 'Jhon Nieves'});
	},
	//
	aps(req, res, next) {
		res.render('index', {site: './administrators/aps', title: 'Jhon Nieves'});
	},
	//
	history(req, res, next) {
		connection.query(lastSevenDays, function(err, results){
		 	if(err) return next(err);
			res.render('index', {site: 'history', title: 'Jhon Nieves', results});
		});
	},
	historyApi(req, res, next) {
		// const f = {
		// 	time: req.query.time,
		// 	venues: req.query.venues,
		// 	aps: req.query.aps,
		// 	network:req.query.network,
		// 	filter: req.query.filter
		// };
		const f = {
			time: req.body.time,
			venues: req.body.venues,
			aps: req.body.aps,
			network:req.body.network,
			filter: req.body.filter
		};
		console.log(f);
		let venuesString = 	"";
		let apsString = "";
		if (f.venues != 'all')
			venuesString = 	" AND ap_name LIKE '" + f.venues + "'";

		if (f.aps != 'all')
				apsString = 	" AND ap_name LIKE '" + f.aps + "'";
		const queryString = `SELECT *FROM cloud_session.UserInfo WHERE start_time >= NOW() - INTERVAL ${f.time} DAY` + venuesString + apsString;
		connection.query(queryString, function(err, results){
		 	if(err) return next(err);
			
			if(f.filter.length > 0){
				if(f.filter.length == 17){
					let result = [];
					results.forEach(function(user){
						let mac = user.client_mac.replace(/\s/g, "");
						if(mac == f.filter){
							result.push(user);
						}
					});
					console.log(result);
					res.render('index', {site: 'history', title: 'Jhon Nieves', results: result});
				}
				else {
					req.flash('error', 'MAC Address suplied is invalid, please try again!');
					res.render('index', {site: 'history', title: 'Jhon Nieves', results});
				}
			}

			else {
				res.json(results);
			}

		});
	},
	administrators(req, res, next) {
		User.find({}, (err, users) => {
			if (err) next(err);
			else {
				res.render('index', {site: './administrators/administrators', title: 'Jhon Nieves', users, url: "/administrators"});
			}
		});
	}
};
