const AP = require('../models/ap');

module.exports = {
	index(req, res, next) {
		AP.find({}, (err, aps) => {
			if (err) next(err);
			else {
				res.render('index', {site: './administrators/aps', title: 'Jhon Nieves', aps, url: "/aps"});
			}
		});
	},
	create(req, res, next) {
		const newAP = {
      name: req.body.name,
      status: req.body.status,
      model: req.body.model,
      ipaddress: req.body.ipaddress,
      macaddress: req.body.macaddress,
      venue: req.body.venue
    };
    AP.create(newAP, function(err, ap){
      if (err) next(err);
      else {
        req.flash('success', 'New ap created successfully');
        res.redirect(req.body.url);
      }
    });
	},
	// SHOW GET	
	show(req, res, next) {
		 AP.findById(req.params.id, function(err, ap) { 
		 	if (err || !ap) next(err || "AP not Found");
		 	else res.json(ap);
		 });
	},
	//
	update(req, res, next) {
		const apNewData = {
      name: req.body.name,
      status: req.body.status,
      model: req.body.model,
      ipaddress: req.body.ipaddress,
      macaddress: req.body.macaddress,
      venue: req.body.venue
		};
		AP.findByIdAndUpdate(req.params.id, apNewData, function(err, ap){
			if (err || !ap) next(err || 'AP not found');
			else {
				res.redirect(req.body.url);
			}
		});
	},
	destroy(req, res, next) {
		AP.findByIdAndRemove(req.params.id, (err)=>{
			if(err) next(err);
			else {
				req.flash('info', 'AP deleted successfully.');
				res.redirect(req.body.url);
			}
		});
	}
};