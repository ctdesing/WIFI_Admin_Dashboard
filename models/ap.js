const	mongoose = require('mongoose'),
			Schema = mongoose.Schema;

const apSchema = new Schema({
	name: String,
	status: String,
	model: String,
	ipaddress: String,
	macaddress: String,
	venue: String
});

module.exports = mongoose.model('AP', apSchema);