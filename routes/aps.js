const express = require('express'),
			{ isAuthenticated, isAuthorized } = require('../middleware/index'),
      { index, create, show, update, destroy } = require('../controllers/ap'),
			app = express.Router();

//***************************************************
//
// APS Routes
//
// INDEX ROUTE
app.get('/', isAuthenticated, isAuthorized, index);
//***************************************************
// CREATE POST
app.post('/', isAuthenticated, isAuthorized, create);
// SHOW GET
app.get('/:id', isAuthenticated, isAuthorized, show);
// UPDATE PUT
app.put('/:id', isAuthenticated, isAuthorized, update);
// REMOVE DELETE
app.delete('/:id', isAuthenticated, isAuthorized, destroy);
//***************************************************
//
//
module.exports = app;
