
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var campoemail = document.queryCommandValue("#email");
var campopass = document.queryCommandValue("#pass");
var btnEntrar = document.querySelector("#entrar")

var body = document.querySelector("body");

btnEntrar.addEventListener("click", function(){
    if(campoemail.valueOf != '' & campopass != '' ){
    location.href = "home.html";
    }
});

btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})





