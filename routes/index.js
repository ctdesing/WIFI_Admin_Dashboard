const express = require('express'),
			passport = require('passport'),
			app = express.Router(),
			{ index, signin, signout, trafficVolume, dataUsage, uniqueLines, venues, aps, history } = require('../controllers/index');

// INDEX ROUTE
app.get('/', index);
// ****************************************************
// USER AUTH ROUTES
app.post('/signin', passport.authenticate('local'), signin);
app.get('/signout', signout);
// ****************************************************
//
// USERS ROUTES
//
app.get('/trafficvolume', trafficVolume);
app.get('/datausage', dataUsage);
app.get('/uniquelines', uniqueLines);
//
//HISTORY ROUTE
app.get('/history', history);
// ****************************************************
//
// ADMINISTRATORS ROUTES
//
app.get('/venues', venues);
app.get('/aps', aps);
//
//
module.exports = app;