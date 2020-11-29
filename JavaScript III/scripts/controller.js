function result(e) {
    console.log(e);
}

function validateEmail(action) {
    var username = action == "register" ? document.getElementById("username").value : null;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    
    var invalidEmail = true;
    var passTooShort = true;
    var passNoNumber = true;
    var passNoUppercase = true;
    var passNoSpecial = true;

    var validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passUppercase = /[A-Z]+/;
    var passNumber = /[0-9]+/;
    var passSpecial = /[!@#$%^&]+/;

    if (email.match(validEmailFormat)) {
        invalidEmail = false;
    }

    if (pass.length >= 6) {
        passTooShort = false;
    }

    if (pass.match(passUppercase)) {
        passNoUppercase = false;
    }

    if (pass.match(passNumber)) {
        passNoNumber = false;
    }

    if (pass.match(passSpecial)) {
        passNoSpecial = false;
    }
    
    var errorMessage = "";
    if (invalidEmail) errorMessage += "The e-mail is invalid. <br>";
    if (passTooShort) errorMessage += "Password is too short. <br>";
    if (passNoUppercase) errorMessage += "Password does not contain an uppercase letter. <br>";
    if (passNoNumber) errorMessage += "Password does not contain a number. <br>";
    if (passNoSpecial) errorMessage += "Password does not contain a special character. <br>";

    if (!invalidEmail && !passTooShort && !passNoUppercase && !passNoNumber && !passNoSpecial) {
        if (action == "register") {
            window.auth.register(username, email, pass, function(e, code, message) {
                if (!e) {
                    alert(message);
                }
                else {
                    window.location.href = "posts.html";
                }
            });
        }
        else if (action == "login") {
            window.auth.login(email, pass, function(e, code, message) {
                if (!e) {
                    alert(message);
                }
                else {
                    window.location.href = "posts.html";
                }
            })
        }
        
    }

    document.getElementById("errors").innerHTML = errorMessage;
    return false;
}