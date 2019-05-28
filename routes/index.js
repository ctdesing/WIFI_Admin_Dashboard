const express = require('express'),
			app = express.Router(),
			{ index, signin, signout } = require('../controllers/index');

// LANDING INDEX GET
app.get('/', index);
// USER SIGN IN POST
app.post('/signin', signin);
// USER SIGN OUT POST
app.get('/signout', signout);
//
module.exports = app;