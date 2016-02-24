// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Sensor     = require('./app/models/sensor');
var Data     = require('./app/models/data');
var config    = require('./app/config/config.json');



var connection = mongoose.connect(config.database.host, config.database.base, config.database.port, config.database.opt, function(err) {
  if (err) { console.log(err); }
});


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});


// REGISTER OUR ROUTES -------------------------------
router.route('/sensor/:sensor_id')
    .get(function(req, res) {
        Sensor.findById(req.params.data_id, function(err, sensor) {
            if (err){
                res.send(err);                
            }
            res.json(sensor);
        });
});
router.route('/sensor')
    .post(function(req, res) {
    	//Save new sensor 

        if(typeof req.body.name !== 'undefined' && typeof req.body.description !== 'undefined'){
            var sensor = new Sensor();
            sensor.name = req.body.name;
            sensor.description = req.body.description; 
            sensor.save(function(err){
                if (err){
                    res.send(err);
                }
                res.json({ message: '1' });
            });
        }else{
            res.json({ message: '0' });
        }

    })
    .get(function(req, res) {
        Sensor.find(function(err, sensor) {
            if (err){
            	res.send(err);
            }
            res.json(sensor);
        });
    });



router.route('/data/:data_id')
    .get(function(req, res) {
        Data.findById(req.params.data_id, function(err, data) {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
});
router.route('/data')
    .post(function(req, res) {
        //Save new Data
        if(typeof req.body.value !== 'undefined' && typeof req.body.sensorId !== 'undefined'){
            //CHECK if sensorId exist 
            var sensorId = req.body.sensorId;
             Sensor.findById(sensorId, function(err, sensor) {
                if (typeof sensor !== 'undefined'){
                    
                    var data = new Data();
                    data.value = req.body.value;
                    data.sensorId = req.body.sensorId; 
                    data.save(function(err){
                    if (err){
                            res.send(err);
                        }
                        res.json({ message: '1' });
                    });
                }else{
                     res.json({ message: '404' });
                } 
            });
        }else{
            res.json({ message: '0' });
        }
      
    })
    .get(function(req, res) {
        Data.find(function(err, data) {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    });


// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);