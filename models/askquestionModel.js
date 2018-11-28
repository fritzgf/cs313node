const {Pool} = require("pg");
//connecting to the database
var connectionString= process.env.dabase_URL || "postgres://interview:questions@localhost:5432/interviewquestionsblog";

const pool = new Pool({connectionString: connectionString});

function InsertInterviewtext(interviewtext, callback) {
    var query = "INSERT INTO interviewsq(interviewtext) VALUES ($1, $2)";
    var params= [interviewtext];
    pool.query(query, params, function(err, result) {

        if (err) {
            throw err;

        }
        console.log("Back from db with result: ", result);
        callback(null, result.rows);    

	});
}

module.exports = {
	InsertInterviewtext: InsertInterviewtext
};