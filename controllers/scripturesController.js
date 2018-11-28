var model = require("../models/scriptureModel.js");

function handleScriptureRequest(req, res) {
	var book = req.query.book;
	console.log("Got a request for book:", book);
	// We could check here a little better...

	var result = model.getScriptureList(book, function(error, result) {
		if (error) {
			console.log("An error occured...");
			res.status(500).json({success: false});
		} else {
			res.json(result);
		}
	});
}


module.exports = {
	handleScriptureRequest: handleScriptureRequest
};