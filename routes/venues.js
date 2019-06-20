const express = require('express'),
			{ isAuthenticated, isAuthorized } = require('../middleware/index'),
      { index, create, update, destroy } = require('../controllers/venue'),
			app = express.Router();

//***************************************************
//
// Venues Routes
//
// INDEX ROUTE
app.get('/', isAuthenticated, isAuthorized, index);
//***************************************************
// CREATE POST
app.post('/', isAuthenticated, isAuthorized, create);
// UPDATE PUT
app.put('/', isAuthenticated, isAuthorized, update);
// REMOVE DELETE
app.delete('/', isAuthenticated, isAuthorized, destroy);
//***************************************************
//
//
module.exports = app;
