function login() {
  document.getElementById("modal-title").innerText = "Welcome Back!";
  document.getElementById("modal-sub-msg").innerText =
    "What will you learn today? Find out, with Alison.";
    document.getElementById("login-modal").style.color ="#83c11f";
    document.getElementById("signup-modal").style.color ="#5d676e";
    document.getElementById("login-bottom").style.display ="block";
    document.getElementById("signup-bottom").style.display ="none";
    document.getElementById("yahoo-box").style.visibility = "visible";
    document.getElementById("login-part").style.display = "none";
    document.getElementById("main-signup-btn").innerText ="Log In";
    document.getElementById("checkbox").style.display ="none";
    document.getElementById("checkbox-1").style.display ="inline-block";
    document.getElementById("f-pass").style.display = "inline-block";
}
function signUp() {
  document.getElementById("modal-title").innerText = "Sign Up For Free";
  document.getElementById("modal-sub-msg").innerText =
    "Join the World’s Largest Free Learning Community";
    document.getElementById("signup-modal").style.color ="#83c11f";
    document.getElementById("login-modal").style.color ="#5d676e";
    document.getElementById("login-bottom").style.display ="none";
    document.getElementById("signup-bottom").style.display ="block";
    document.getElementById("yahoo-box").style.visibility = "hidden";
    document.getElementById("login-part").style.display = "block";
    document.getElementById("main-signup-btn").innerText ="Sign Up";
    document.getElementById("f-pass").style.display = "none";
    document.getElementById("checkbox").style.display ="inline-block";
    document.getElementById("checkbox-1").style.display ="none";
}

function searchInput(){
  document.getElementById("input-placeholdar").style.display = "none";
}


