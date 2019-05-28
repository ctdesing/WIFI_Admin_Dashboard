const express = require('express'),
			app = express.Router(),
			{ register, create, profile, edit, update, destroy } = require('../controllers/user');

// NEW FORM
app.get('/new', register);
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
