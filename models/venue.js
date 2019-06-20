const	mongoose = require('mongoose'),
			Schema = mongoose.Schema;

const venueSchema = new Schema({
  venue: {type: String, unique: true},
  descripton: String,
  city: String,
  country: String,
  networks: Number,
  noofaps: Number,
  clients: Number  
});

module.exports = mongoose.model('Venue', venueSchema);
