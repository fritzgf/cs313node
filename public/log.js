// using function to call 
function login() {
    console.log("in the function");
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function (data) {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            window.location.href = "/index.html"
        }
    };
    var email = document.getElementById('useremail').value;
    var password = document.getElementById('userpassword').value;

    console.log("email:", email);
    console.log("password:", password);

    httpRequest.open("POST", '/login', true)
    httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpRequest.send("email=" + email + "&password=" + password)
}

console.log("calling the server");
// display data to the browser
function displayLinks(result) {
    console.log("result:", result);
    document.getElementById("useremail").innerHTML = "";
    document.getElementById("userpassword").innerHTML = "";
}




