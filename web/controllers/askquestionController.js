var model = require("../models/askquestionModel.js");

function handleInterviewqRequest(req, res) {
    var interviewtext = req.query.interviewtext;
    var interview_id = req.query.interview_id;

	console.log("Got a request for interview text:", interviewtext);
  
    // We could check here a little better...

	var result = model.InsertInterviewtext(interview_id, interviewtext, function(error, result) {
		if (error) {
			console.log("An error occured...");
			res.status(500).json({success: false}); 
		} else {
			res.json(result);
		}
	});
}

module.exports = {
	handleInterviewqRequest: handleInterviewqRequest
};