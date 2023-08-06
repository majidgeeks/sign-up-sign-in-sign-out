function register() {
  var userSignUp = document.getElementById("signup-user");
  var passSignUp = document.getElementById("signup-Password");

  localStorage.setItem("user-name", userSignUp.value);
  localStorage.setItem("password", passSignUp.value);

  userSignUp.value = "";
  passSignUp.value = "";

  var h1 = (document.getElementById("sign-up-message").innerHTML +=
    "Account created Successfully");
}

function goToSignIn() {
  location.href = "./signIn.html";
}

function signIn() {
  var userName = document.getElementById("user-signIn");
  var password = document.getElementById("user-signIn");
  var storedUserName = localStorage.getItem("user-name");
  var storedPassword = localStorage.getItem("password");
  console.log({
    storedUserName,
    storedPassword,
    userName: userName.value,
    password: password.value,
  });
  if (storedUserName === userName.value && storedUserName === password.value) {
    
      location.href = "./myPage.html";
  } else {
    alert("Wrong Password");
    
  }
};


function signOut(){

    location.href = "./signIn.html";
}
