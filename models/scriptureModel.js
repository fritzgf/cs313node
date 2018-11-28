const {Pool} = require("pg");

function getScriptureList(book, callback) {
	// if book is null, get everything
	if (book) {
		console.log("Getting scriptures for book:", book);
	} else {
		// else get just for that book
		console.log("Getting all scriptures");
	}

	// In a minute, we're going to do DB stuff here...
	var result = {success: true,
				  data: [
				  	     {book: "2 Nephi", chapter: 2, verse: 25, text: "Adam fell..."},
				  	     {book: "Matthew", chapter: 5, verse: 16, text: "Let your light..."},
				  	     {book: "1 Nephi", chapter: 2, verse: 15, text: "And my father dwelt in a tent."}
				  ]};

	callback(null, result);
}

module.exports = {
	getScriptureList: getScriptureList
};