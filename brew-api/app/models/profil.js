// app/models/profil.js

var mongoose     = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var profilSchema   = new Schema({
	id: ObjectId,
    name: String,
    description: String,
});


module.exports = mongoose.model('Profil', profilSchema);