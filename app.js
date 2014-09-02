// ******************************************
// JsToday APP
//
// Keep up with the latest JS news and tweets
// from movers and shakers.  Log in to the
// app to star articles for later viewing.
// __________________________________________

// Add neccessary modules.
var express      = require('express');
var port         = 3000;
var mongoose     = require('mongoose');
var path         = require('path');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var configDB     = require('./config/database.js');

// Connect to database.
mongoose.connect(configDB.url);

// Set up the express application.
var app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'jade');

// Pass app and passport to routes.
require('./app/routes/route.js')(app);

// launch ======================================================================
app.listen(port);
console.log('The app is running on port', port);
