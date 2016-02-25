// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express         = require('express');        // call express
var app             = express();                 // define our app using express
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var config          = require('./app/config/config.json');



var connection = mongoose.connect(config.database.host, config.database.base, config.database.port, config.database.opt, function(err) {
  if (err) { console.log(err); }
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});

//Require routes for app
require('./routes')(app,router);

// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);