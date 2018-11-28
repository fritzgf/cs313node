const { Pool } = require("pg");
//connecting to the database
var connectionString = process.env.dabase_URL || "postgres://interview:questions@localhost:5432/interviewquestionsblog";

const pool = new Pool({ connectionString: connectionString });

function getUserByEmail(useremail, callback) {
	console.log("Getting person from DB with id: " + useremail);

	// Set up the SQL that we will use for our query. Note that we can make
	// use of parameter placeholders just like with PHP's PDO.
	var sql = "SELECT user_id, useremail, userpassword FROM accounts WHERE useremail = $1";

	// We now set up an array of all the parameters we will pass to fill the
	// placeholder spots we left in the query.
	var params = [useremail];

	// This runs the query, and then calls the provided anonymous callback function
	// with the results.
	pool.query(sql, params, function(err, result) {
		// If an error occurred...
		if (err) {
			console.log("Error in query: ")
			console.log(err);
			callback(err, null);
		}S

		// Log this to the console for debugging purposes.
		console.log("Found result: " + JSON.stringify(result.rows));

		// (The first parameter is the error variable, so we will pass null.)
		callback(null, result.rows);
	});

} // end of getPersonFromDb
module.exports = {
    getUserByEmail: getUserByEmail
};