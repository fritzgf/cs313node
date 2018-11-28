
var model = require("../models/loginModel.js");

function handleUserLogRequest(req, res) {
	var useremail = req.query.email;
	var userpassword = req.query.password;
    
	console.log("Got a request for user email:", useremail);
	console.log("Got a request for user email:", userpassword);

	// We could check here a little better...

	var result = model.getUserByEmail(useremail, function (error, result) {
		console.log("insert data");
		if (error) {
			console.log("An error occured...");
			res.status(500).json({ success: false });
		} else {
			res.json(result);
		}
	});
}

module.exports = {
	handleUserLogRequest:handleUserLogRequest
};