// app/models/data.js

var mongoose     = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var dataSchema   = new Schema({
	id: ObjectId,
    value: Number,
    brewingId:String,
    date: { type: Date, default: Date.now },
    sensorId: String,
});


module.exports = mongoose.model('Data', dataSchema);