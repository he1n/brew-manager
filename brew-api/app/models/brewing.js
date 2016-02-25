// app/models/brewing.js

var mongoose     = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var brewingSchema   = new Schema({
	id: ObjectId,
    name: String,
    description: String,
    date: { type: Date, default: Date.now },
    profilId: String
});


module.exports = mongoose.model('Brewing', brewingSchema);