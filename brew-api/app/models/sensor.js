// app/models/data.js

var mongoose     = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var sensorSchema   = new Schema({
	id: ObjectId,
    name: String,
    description: String,
});


module.exports = mongoose.model('Sensor', sensorSchema);