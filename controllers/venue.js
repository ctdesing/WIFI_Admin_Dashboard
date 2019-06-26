const Venue = require('../models/venue');

module.exports = {
	index(req, res, next) {
		Venue.find({}, (err, venues) => {
			if (err) next(err);
			else {
				res.render('index', {site: './administrators/venues', title: 'Jhon Nieves', venues, url: "/venues"});
			}
		});
	},
	create(req, res, next) {
		const newVenue = {
      venue: req.body.venue,
      description: req.body.description,
      city: req.body.city,
      country: req.body.country,
      networks: req.body.networks,
      noofaps: req.body.noofaps,
      clients: req.body.clients
    };
    Venue.create(newVenue, function(err, venue){
      if (err) next(err);
      else {
        req.flash('success', 'New venue created successfully');
        res.redirect(req.body.url);
      }
    });
	},
	// SHOW GET	
	show(req, res, next) {
		 Venue.findById(req.params.id, function(err, venue) { 
		 	if (err || !venue) next(err || "Venue not Found");
		 	else res.json(venue);
		 });
	},
	//
	update(req, res, next) {
		const venueNewData = {
      venue: req.body.venue,
      description: req.body.description,
      city: req.body.city,
      country: req.body.country,
      networks: req.body.networks,
      noofaps: req.body.noofaps,
      clients: req.body.clients
		};
		Venue.findByIdAndUpdate(req.params.id, venueNewData, function(err, venue){
			if (err || !venue) next(err || 'Venue not found');
			else {
				res.redirect(req.body.url);
			}
		});
	},
	destroy(req, res, next) {
		Venue.findByIdAndRemove(req.params.id, (err)=>{
			if(err) next(err);
			else {
				req.flash('info', 'Venue deleted successfully.');
				res.redirect(req.body.url);
			}
		});
	}
};
