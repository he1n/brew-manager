// app/models/temperature.js

var mongoose     = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var temperatureSchema   = new Schema({
	id: ObjectId,
	profilId: String,
    begin: Number,
    value: Number,
});


module.exports = mongoose.model('Temperature', temperatureSchema);