const express = require('express'),
			passport = require('passport'),
			app = express.Router(),
			{ index, signin, signout } = require('../controllers/index');

// LANDING INDEX GET
app.get('/', index);
//**********************************************************
// USER SIGN IN POST
app.post('/signin', passport.authenticate('local'), signin);
// USER SIGN OUT POST
app.get('/signout', signout);
//
module.exports = app;