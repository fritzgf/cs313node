// Using function from: https://stackoverflow.com/a/18324384/1932766
function callAjax(url, callback){
    var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function search() {
	console.log("Searching...");

	var book = document.getElementById("txtBook").value;

	console.log("Book:", book);

	// TODO: We should check to see if book is empty
	// TODO: We should make sure the text is properly URL encoded
	var url = "/scriptures?book=" + book;

	callAjax(url, handleResultList)

}

function handleResultList(result) {
	console.log("Back from AJAX with result:");
    console.log(result);
    if (result.Search && result.Search.length > 0) {
        var resultList = $("#ulResults");
        resultList.empty();

        for (var i = 0; i < result.Search.length; i++) {
            var book = result.Search[i].Book;
            resultList.append("<li><p>" + book + "</p></li>");
}

 }

}
