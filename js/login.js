"use strict";
let title = document.getElementsByTagName("h1")[0];
let email = document.getElementById("email");
let password = document.getElementById("password");
let userData = localStorage.getItem("userJSArr");
let logBtn = document.getElementById("log-btn");
let elem = document.getElementById("root");
userData = JSON.parse(userData);

logBtn.addEventListener("click", () => {
  //user validation 1
  if (
    email.value === userData[0].email &&
    password.value === userData[0].password
  ) {
    alert("logged in");
    //color form creation if user logged in
    title.innerHTML += userData[0].username;
    title.style.textTransform = "capitalize";
    let form = document.createElement("form");
    form.method = "get";
    form.style.margin = "20px";
    form.style.display = "flex";
    form.style.justifyContent = "space-between";
    elem.appendChild(form);
    let colorInpArr = [];
    for (let i = 0; i < 4; i++) {
      let label = document.createElement("label");
      let input = document.createElement("input");
      form.appendChild(label);
      form.appendChild(input);
      input.type = "number";
      input.placeholder = "Give value to ";
      input.classList = "my-input ";
      input.autocomplete = "off";
      if (i === 0) {
        label.textContent = "R";
        label.setAttribute("for", "r");
        input.id = "r";
        input.placeholder += "Red";
      } else if (i === 1) {
        label.textContent = "G";
        label.setAttribute("for", "g");
        input.id = "g";
        input.placeholder += "Green";
      } else if (i === 2) {
        label.textContent = "B";
        label.setAttribute("for", "b");
        input.id = "b";
        input.placeholder += "Blue";
      } else {
        label.textContent = "A";
        label.setAttribute("for", "a");
        input.id = "a";
        input.placeholder += "Opacity";
      }
      colorInpArr.push(input);
      //limitations for rgba inputs
      colorInpArr[i].addEventListener("keydown" && "keyup", () => {
        let max_chars = 3;
        if (colorInpArr[i].value.length > max_chars) {
          colorInpArr[i].value = colorInpArr[i].value.substring(0, max_chars);
        }
      });
      colorInpArr[i].addEventListener("change", () => {
        if (colorInpArr[i].value >= 256 || colorInpArr[i].value < 0) {
          alert("Not an RGB value, Please enter a number between 0-256");
          colorInpArr[i].value = "";
        }
      });
      if (i === 3) {
        colorInpArr[i].addEventListener("change", () => {
          if (colorInpArr[i].value > 1 || colorInpArr[i].value < 0) {
            alert(
              "Not an opacity value, Please try a number with decimals from 0-1"
            );
            colorInpArr[i].value = "";
          }
        });
      }
    }
    let displayBtn = document.createElement("button");
    let saveBtn = document.createElement("button");
    let showAgainBtn = document.createElement("button");
    let clearColorBtn = document.createElement("button");
    let displayDiv = document.createElement("div");
    let showAgainDiv = document.createElement("div");
    form.appendChild(displayBtn);
    form.appendChild(saveBtn);
    form.appendChild(showAgainBtn);
    form.appendChild(clearColorBtn);
    form.appendChild(displayDiv);
    form.appendChild(showAgainDiv);
    displayBtn.type = "button";
    saveBtn.type = "button";
    showAgainBtn.type = "button";
    displayBtn.textContent = "Display RGBA color";
    saveBtn.textContent = "Save color";
    showAgainBtn.textContent = "Show color again";
    clearColorBtn.textContent = "Clear chosen color";
    displayDiv.style.width = "20px";
    displayDiv.style.height = "20px";
    showAgainDiv.style.width = "20px";
    showAgainDiv.style.height = "20px";
    //display color button
    displayBtn.addEventListener("click", () => {
      let rgba = {
        Red: colorInpArr[0].value,
        Green: colorInpArr[1].value,
        Blue: colorInpArr[2].value,
        Alpha: colorInpArr[3].value,
      };
      displayDiv.style.backgroundColor = `rgba(${rgba.Red}, ${rgba.Green}, ${rgba.Blue}, ${rgba.Alpha})`;
    });
    //save color into local storage button
    saveBtn.addEventListener("click", () => {
      let rgba = {
        Red: colorInpArr[0].value,
        Green: colorInpArr[1].value,
        Blue: colorInpArr[2].value,
        Alpha: colorInpArr[3].value,
      };
      window.localStorage.setItem("userSavedColor", JSON.stringify(rgba));
    });
    //show color saved into local storage button
    showAgainBtn.addEventListener("click", () => {
      let userColorJSON = window.localStorage.getItem("userSavedColor");
      let savedColor = JSON.parse(userColorJSON);
      showAgainDiv.style.backgroundColor = `rgba(${savedColor.Red},${savedColor.Green},${savedColor.Blue},${savedColor.Alpha})`;
    });
    //clear color from local storage button
    clearColorBtn.addEventListener("click", () => {
      localStorage.removeItem("userSavedColor");
    });
    //user validation 2
  } else if (
    email.value === userData[1].email &&
    password.value === userData[1].password
  ) {
    alert("logged in");
    //color form creation if user logged in
    title.innerHTML += userData[0].username;
    title.style.textTransform = "capitalize";
    let form = document.createElement("form");
    form.method = "get";
    form.style.margin = "20px";
    form.style.display = "flex";
    form.style.justifyContent = "space-between";
    elem.appendChild(form);
    let colorInpArr = [];
    for (let i = 0; i < 4; i++) {
      let label = document.createElement("label");
      let input = document.createElement("input");
      form.appendChild(label);
      form.appendChild(input);
      input.type = "number";
      input.placeholder = "Give value to ";
      input.classList = "my-input ";
      input.autocomplete = "off";
      if (i === 0) {
        label.textContent = "R";
        label.setAttribute("for", "r");
        input.id = "r";
        input.placeholder += "Red";
      } else if (i === 1) {
        label.textContent = "G";
        label.setAttribute("for", "g");
        input.id = "g";
        input.placeholder += "Green";
      } else if (i === 2) {
        label.textContent = "B";
        label.setAttribute("for", "b");
        input.id = "b";
        input.placeholder += "Blue";
      } else {
        label.textContent = "A";
        label.setAttribute("for", "a");
        input.id = "a";
        input.placeholder += "Opacity";
      }
      colorInpArr.push(input);
      //limitations for rgba inputs
      colorInpArr[i].addEventListener("keydown" && "keyup", () => {
        let max_chars = 3;
        if (colorInpArr[i].value.length > max_chars) {
          colorInpArr[i].value = colorInpArr[i].value.substring(0, max_chars);
        }
      });
      colorInpArr[i].addEventListener("change", () => {
        if (colorInpArr[i].value >= 256 || colorInpArr[i].value < 0) {
          alert("Not an RGB value, Please enter a number between 0-256");
          colorInpArr[i].value = "";
        }
      });
      if (i === 3) {
        colorInpArr[i].addEventListener("change", () => {
          if (colorInpArr[i].value > 1 || colorInpArr[i].value < 0) {
            alert(
              "Not an opacity value, Please try a number with decimals from 0-1"
            );
            colorInpArr[i].value = "";
          }
        });
      }
    }
    let displayBtn = document.createElement("button");
    let saveBtn = document.createElement("button");
    let showAgainBtn = document.createElement("button");
    let clearColorBtn = document.createElement("button");
    let displayDiv = document.createElement("div");
    let showAgainDiv = document.createElement("div");
    form.appendChild(displayBtn);
    form.appendChild(saveBtn);
    form.appendChild(showAgainBtn);
    form.appendChild(clearColorBtn);
    form.appendChild(displayDiv);
    form.appendChild(showAgainDiv);
    displayBtn.type = "button";
    saveBtn.type = "button";
    showAgainBtn.type = "button";
    displayBtn.textContent = "Display RGBA color";
    saveBtn.textContent = "Save color";
    showAgainBtn.textContent = "Show color again";
    clearColorBtn.textContent = "Clear chosen color";
    displayDiv.style.width = "20px";
    displayDiv.style.height = "20px";
    showAgainDiv.style.width = "20px";
    showAgainDiv.style.height = "20px";
    //display color button
    displayBtn.addEventListener("click", () => {
      let rgba = {
        Red: colorInpArr[0].value,
        Green: colorInpArr[1].value,
        Blue: colorInpArr[2].value,
        Alpha: colorInpArr[3].value,
      };
      displayDiv.style.backgroundColor = `rgba(${rgba.Red}, ${rgba.Green}, ${rgba.Blue}, ${rgba.Alpha})`;
    });
    //save color into local storage button
    saveBtn.addEventListener("click", () => {
      let rgba = {
        Red: colorInpArr[0].value,
        Green: colorInpArr[1].value,
        Blue: colorInpArr[2].value,
        Alpha: colorInpArr[3].value,
      };
      window.localStorage.setItem("userSavedColor", JSON.stringify(rgba));
    });
    //show color saved into local storage button
    showAgainBtn.addEventListener("click", () => {
      let userColorJSON = window.localStorage.getItem("userSavedColor");
      let savedColor = JSON.parse(userColorJSON);
      showAgainDiv.style.backgroundColor = `rgba(${savedColor.Red},${savedColor.Green},${savedColor.Blue},${savedColor.Alpha})`;
    });
    //clear color from local storage button
    clearColorBtn.addEventListener("click", () => {
      localStorage.removeItem("userSavedColor");
    });
    //if user not registered take to sign up page
  } else {
    alert("not registered, taking you to sign up page");
    window.location.assign("/index.html");
  }
});
