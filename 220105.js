const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");

// function clickLoginButton() {
//     const userName = loginInput.value;
//     if (userName === "") {
//         alert("Please write your name");
//     } else if (userName.length > 15) {
//         alert("Your name is too long");
//     }
// }
// 
// loginButton.addEventListener("click", clickLoginButton);

// function clickLoginButton() {
//     const userName = loginInput.value;
//     console.log(userName);
// }


function onLoginSubmit(event) {
    event.preventDefault();
    // const userName = loginInput.value;
    // console.log(event);
    console.log(loginInput.value);
}


loginForm.addEventListener("submit", onLoginSubmit);