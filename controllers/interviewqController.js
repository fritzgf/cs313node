var model = require("../models/interviewModel.js");

function handleInterviewRequest(req, res) {
	var interviewtext = req.query.interviewtext;

	console.log("Got a request for interview text:", interviewtext);
  
    // We could check here a little better...

	var result = model.getInterviewList(interviewtext, function(error, result) {
		if (error) {
			console.log("An error occured...");
			res.status(500).json({success: false}); 
		} else {
			res.json(result);
		}
	});
}

module.exports = {
	handleInterviewRequest:handleInterviewRequest
};