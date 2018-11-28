// using function to call 
function register() {
    console.log("in the function");
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function (data) {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
       window.location.href="/login.html"
        }
    };
    var username = document.getElementById('userfirstname').value;
    var lastname = document.getElementById('userlastname').value;
    var email = document.getElementById('useremail').value;
    var password = document.getElementById('userpassword').value;

    console.log("first name:", username);
    console.log("last name:", lastname);
    console.log("email:", email);
    console.log("password:", password);

    httpRequest.open("POST", '/register', true)
    httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpRequest.send("firstname=" + username + "&lastname=" + lastname + "&email=" + email + "&password=" + password)
}


console.log("calling the server");
// display data to the browser
function displayLinks(result) {
    console.log("result:", result);
    document.getElementById("userfirtname").innerHTML = "";
    document.getElementById("userlastname").innerHTML = "";
    document.getElementById("useremail").innerHTML = "";
    document.getElementById("userpassword").innerHTML = "";
}




