const passportLocalMongoose = require('passport-local-mongoose'),
			mongoose = require('mongoose'),
			Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {type: String, unique: true},
	name: String,
	created: {type: Date, default: Date.now()},
	isAdmin: {type: Boolean, default: false}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);