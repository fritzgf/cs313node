// using function to call 
function callAllInterviewText() {
    console.log("in the function");
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function (data) {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {

            var newObj = JSON.parse(httpRequest.responseText);
            console.log("back from the server with this result", data)
            
            displayLinks(newObj);
            console.log("something needs to happen", newObj);

        }
    };
    console.log("calling the server");
    httpRequest.open("GET", 'interviewq', true);
    console.log("calling the url");
    httpRequest.send();
    console.log("send message");
}

// display data to the browser
function displayLinks(result) {
    var interviewtext;
    console.log(result);
    //  alert("result "+ result);
    interviewtext = result['interviewtext'];
    
    console.log("Display the links", interviewtext);
    var resultList = "";
    for( var i=0; i <result.length; i++){
        resultList += "<hr>" +"<p class='makeLinks' onclick='ajax("
                   + result[i].interviewq_id + ")'>"
                   + result[i].interviewtext + "</p>"+ "<hr>";
    }
    
    document.getElementById("links").innerHTML = resultList;
}


