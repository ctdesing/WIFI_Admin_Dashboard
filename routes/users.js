const express = require('express'),
			app = express.Router(),
			{ userAuth } = require('../middleware/index'),
			{ index, create, profile, edit, update, destroy } = require('../controllers/user');

// USERS SECTION
app.get('/', userAuth, index);
// NEW -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- 
app.get('/new', (req, res, next) => {
	res.render('register', {title: 'Jhon Nieves'});
});
// -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- -- TEMPORARY -- 
//
// CREATE POST
app.post('/', create);
// SHOW GET
app.get('/:username', profile);
// EDIT GET
app.get('/:id/edit', edit);
 // UPDATE PUT
app.put('/:id', update);
// DESTROY DELETE
app.delete('/:id', destroy);

module.exports = app;
