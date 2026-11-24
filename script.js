
function login() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "admin@gmail.com" && password == "12345") {

        document.getElementById("message").innerHTML =
        "Login Successful!";

    } 
    else {

        document.getElementById("message").innerHTML =
        "Invalid Email or Password";

    }
}
