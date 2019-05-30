const mysql = require('mysql');

//DATABASE CONNECTION MYSQL
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'qzP01001110'
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
  }
  else
    console.log('connected as id ' + connection.threadId);
});

module.exports = {
	index(req, res, next) {
		if (req.isAuthenticated()) {
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
	signin(req, res, next) {
		res.redirect('/');
	},
	signout(req, res, next) {
		req.logout();
		res.redirect('/');
	}
};