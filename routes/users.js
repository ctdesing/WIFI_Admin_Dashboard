const express = require('express'),
			app = express.Router(),
			{ index, create, profile, edit, update, destroy } = require('../controllers/user');

// PROFILE
app.get('/', index);
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
