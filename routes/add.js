var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add', data);

	var friendName = req.query.name;
	var friendDescription = req.query.description;
	var friendImage = "http://lorempixel.com/400/400/people";

	var newFriend = 
	{
		'name' : friendName,
		'description' : friendDescription,
		'imageURL' : friendImage
	}
	data["friends"].push(newFriend);

 }