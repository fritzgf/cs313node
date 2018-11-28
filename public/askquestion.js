// using function to call 
function interviewquestion() {
    console.log("in the function");
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function (data) {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            window.location.href = "/index.html"
        }
    };
    
    var interviewtext = document.getElementById('interviewtext').value;

    console.log("interviewtext:", interviewtext);
  

    httpRequest.open("POST", '/interviewq', true)
    httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpRequest.send("interviewtext=" + interviewtext)
}

console.log("calling the server");
// display data to the browser
function displayLinks(result) {
    console.log("result:", result);
    document.getElementById("links").innerHTML = "";
    
}




