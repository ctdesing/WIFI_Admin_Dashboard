const express = require('express'),
			passport = require('passport'),
			{ isAuthenticated, isAuthorized } = require('../middleware/index'),
			app = express.Router(),
			{ index, signin, signout, trafficVolume, dataUsage, uniqueLines, venues, aps, history, historyApi, administrators, chartsApi } = require('../controllers/index');

// INDEX ROUTE
app.get('/', index);
// ChartsAPI ROUTE
app.get('/charts', chartsApi);
// ****************************************************
// USER AUTH ROUTES
app.post('/', signin);
app.get('/signout', signout);
// ****************************************************
//
// USERS ROUTES
//
app.get('/trafficvolume', isAuthenticated, trafficVolume);
app.get('/datausage', isAuthenticated, dataUsage);
app.get('/uniquelines', isAuthenticated, uniqueLines);
//
//HISTORY ROUTE
app.get('/history', isAuthenticated, history);
app.post('/history/filter', isAuthenticated, historyApi);
// ****************************************************
//
// ADMINISTRATORS ROUTES
//
app.get('/venues', isAuthenticated, isAuthorized, venues);
app.get('/aps', isAuthenticated, isAuthorized, aps);
app.get('/administrators', isAuthenticated, isAuthorized, administrators);
//
//
module.exports = app;
