module.exports = function(app,router){
var Sensor          = require('./app/models/sensor');
var Data            = require('./app/models/data');
var Brewing         = require('./app/models/brewing');
var Profil          = require('./app/models/profil');
var Temperature     = require('./app/models/temperature');
//////////////////////////////////////////////////////////////////
//Route for sensor  
//////////////////////////////////////////////////////////////////
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


//////////////////////////////////////////////////////////////////////////
//Route for data   
//////////////////////////////////////////////////////////////////////////
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


///////////////////////////////////////////////////////////////////////////////////
//Route for brewing  
//////////////////////////////////////////////////////////////////////////////////
router.route('/brewing/:brewing_id')
    .get(function(req, res) {
        Brewing.findById(req.params.data_id, function(err, brewing) {
            if (err){
                res.send(err);                
            }
            res.json(brewing);
        });
});
router.route('/brewing')
    .post(function(req, res) {
        //Save new brewing 
        if(typeof req.body.name !== 'undefined' && typeof req.body.description !== 'undefined' ){
            var brewing = new Brewing();
            brewing.name = req.body.name;
            brewing.description = req.body.description; 
            brewing.date = req.body.date; 
            brewing.save(function(err){
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
        Brewing.find(function(err, brewing) {
            if (err){
                res.send(err);
            }
            res.json(brewing);
        });
    });


///////////////////////////////////////////////////////////////////////////
//Route for profil  
//////////////////////////////////////////////////////////////////////////
router.route('/profil/:profil_id')
    .get(function(req, res) {
        Profil.findById(req.params.data_id, function(err, profil) {
            if (err){
                res.send(err);                
            }
            res.json(profil);
        });
});
router.route('/profil')
    .post(function(req, res) {
        //Save new profil 
        if(typeof req.body.name !== 'undefined' && typeof req.body.description !== 'undefined'){
            var profil = new Profil();
            profil.name = req.body.name;
            profil.description = req.body.description; 
            profil.save(function(err){
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
        Profil.find(function(err, profil) {
            if (err){
                res.send(err);
            }
            res.json(profil);
        });
    });


///////////////////////////////////////////////////////////////////////////
//Route for temperature  
//////////////////////////////////////////////////////////////////////////
router.route('/temperature/:temperature_id')
    .get(function(req, res) {
        Temperature.findById(req.params.temperature_id, function(err, temperature) {
            if (err){
                res.send(err);
            }
            res.json(temperature);
        });
});
router.route('/temperature')
    .post(function(req, res) {
        //Save new Data
        if(typeof req.body.value !== 'undefined' && typeof req.body.profilId !== 'undefined'  && typeof req.body.begin !== 'undefined'){
            //CHECK if sensorId exist 
            var profilId = req.body.profilId;
             Profil.findById(profilId, function(err, profil) {
                if (typeof profil !== 'undefined'){
                    var temperature = new Temperature();
                    temperature.value = req.body.value;
                    temperature.profilId = req.body.profilId; 
                    temperature.begin = req.body.begin; 
                    temperature.save(function(err){
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
        Temperature.find(function(err, temperature) {
            if (err){
                res.send(err);
            }
            res.json(temperature);
        });
    });
}