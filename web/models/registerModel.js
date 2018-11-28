const { Pool } = require("pg");
//connecting to the database
var connectionString = process.env.dabase_URL || "postgres://interview:questions@localhost:5432/interviewquestionsblog";

const pool = new Pool({ connectionString: connectionString });

function InsertUserInfo(userfirstname, userlastname, useremail, userpassword, callback) {
    var query = "INSERT INTO accounts(userfirstname, userlastname, useremail, userpassword) VALUES ($1, $2, $3, $4)";
    var params = [userfirstname, userlastname, useremail, userpassword];
    pool.query(query, params, function (err, result) {

        if (err) {
            throw err;
        }
        console.log("Back from db with result: ", result);
        callback(null, result.rows);

    });
}

module.exports = {
    InsertUserInfo: InsertUserInfo
};