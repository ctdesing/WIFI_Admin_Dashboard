const express = require('express'),
			app = express.Router(),
			{ isAuthenticated, isAuthorized } = require('../middleware/index'),
			{ index, create, profile, update, destroy } = require('../controllers/user');

// USERS SECTION
app.get('/', isAuthenticated, isAuthorized, index);
// NEW -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- 
app.get('/new', (req, res, next) => {
	res.render('register', {title: 'Jhon Nieves'});
});
// -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- 
//
// CREATE POST
app.post('/', create);
// SHOW GET
app.get('/:id', profile);
 // UPDATE PUT
app.put('/:id', update);
// DESTROY DELETE
app.delete('/:id', destroy);

module.exports = app;
