var model = require("../models/registerModel.js");

function handleUserRequest(req, res) {
	var userfirstname = req.body.firstname;
	var userlastname = req.body.lastname;
	var useremail = req.body.email;
	var userpassword = req.body.password;
	console.log("Got a request for user first name:", userfirstname);
	console.log("Got a request for user last name:", userlastname); 
	console.log("Got a request for user email:", useremail);
	console.log("Got a request for user email:", userpassword);   
	
	// We could check here a little better...
	
	var result = model.InsertUserInfo(userfirstname, userlastname, useremail, userpassword, function(error, result) {
		console.log("insert data");
		if (error) {
			console.log("An error occured...");
			res.status(500).json({success: false}); 
		} else {
			res.json(result[0]);
		}
	});
}

module.exports = {
	handleUserRequest: handleUserRequest
};