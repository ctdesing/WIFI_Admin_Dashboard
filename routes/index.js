const express = require('express'),
			passport = require('passport'),
			{ isAuthenticated, isAuthorized } = require('../middleware/index'),
			app = express.Router(),
			{ index, signin, signout, aps, history, historyApi, administrators, chartsApi } = require('../controllers/index');


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
//
// HISTORY ROUTE
app.get('/history', isAuthenticated, history);
app.post('/history/filter', isAuthenticated, historyApi);
// ****************************************************
//
// ADMINISTRATORS ROUTES
//
app.get('/administrators', isAuthenticated, isAuthorized, administrators);
//
//
module.exports = app;
