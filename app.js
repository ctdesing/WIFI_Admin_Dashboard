// INIT
// ****************************************************
// DEPENDENCIES
//
const createError = require('http-errors'),
			express = require('express'),
			path = require('path'),
			cookieParser = require('cookie-parser'),
			logger = require('morgan'),
			favicon = require('serve-favicon'),
			bodyParser = require('body-parser'),
			passport = require('passport'),
			mysql = require('mysql'),
      mongoose = require('mongoose'),
			session = require('express-session');
			app = express();
// MODELS - MongoDB
const User = require('./models/user');
// ROUTER
const indexRouter = require('./routes/index'),
			usersRouter = require('./routes/users');
// ****************************************************
// APP SETUP
//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'assets')));
// SESSION
app.use(session({
  secret: 'ZmH=WRpqWLBPb=C7!BJ8!WJ23FFS$u5Kcahe3yN-E=k8T8dy',
  resave: false,
  saveUninitialized: true
}));
// PASSPORT CONFIG
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// DATABASE CONNECTION Mongoose
mongoose.connect("mongodb://localhost:27017/dashboard", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});
// GLOBAL VARIABLES
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});
  


// ****************************************************
// ROUTES
//
app.use('/', indexRouter);
app.use('/users', usersRouter);
// ****************************************************
// 404 ERROR HANDLER
//
app.use(function(req, res, next) {
  next(createError(404));
});
// ****************************************************
// ERROR HANDLER MIDDLEWARE
//
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', {err});
});

module.exports = app;
