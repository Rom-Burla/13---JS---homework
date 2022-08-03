let username = document.getElementById("usernamereg");
let email = document.getElementById("emailreg");
let password = document.getElementById("passwordreg");
let regBtn = document.getElementById("reg-btn");

regBtn.addEventListener("click", () => {
  //Validation of inputs
  if (username.value == "") {
    alert("username have to be at least 1 character");
    throw (username.value = "");
  }

  if (email.value == "") {
    alert("you have to write your email");
    throw (email.value = "");
  }

  if (password.value == "") {
    alert("you have to create a password");
    throw (password.value = "");
  }
  //get data into object
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  //turn data to JSON
  let userData = window.localStorage.getItem("userJSArr");
  if (userData) {
    userData = JSON.parse(userData);
  } else {
    userData = [];
  }
  //push data into local storage
  userData.push(user);
  window.localStorage.setItem("userJSArr", JSON.stringify(userData));
  window.location.assign("/login.html");
});
