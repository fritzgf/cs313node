const {Pool} = require("pg");
//connecting to the database
var connectionString= process.env.dabase_URL || "postgres://interview:questions@localhost:5432/interviewquestionsblog";

const pool = new Pool({connectionString: connectionString});

function getInterviewList(interviewtext, callback) {
   
    pool.query("SELECT * FROM interviewsq", function(err, result) {

        if (err) {
            throw err;

        }
        console.log("Back from db with result: ", result);
        callback(null, result.rows);    

	});
}

module.exports = {
	getInterviewList: getInterviewList
};