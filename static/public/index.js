const signupForm = document.getElementById("signup-form");
const userName = document.getElementById("user-name");
const Name = document.getElementById("userName");
const userPassword = document.getElementById("user-password");
const userConfirmedPassword = document.getElementById(
  "user-confirmed-password"
);
const signupContainer = document.getElementById("signup-container");
const signupBtn = document.getElementById("signup-btn");

const displayMessage = (msgText) => {
  const messageP = document.createElement("p");
  messageP.textContent = msgText;
  signupContainer.appendChild(messageP);
};

signupBtn.addEventListener("click", () => {
  //e.preventDefault();
  console.log("here");
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userName.value,
      name: Name.value,
      password: userPassword.value,
      confirmedPassword: userConfirmedPassword.value,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      // if (result.status === 400) {
      //   displayMessage("invalid password or username, please check again");
      // } else if (result.status === 409) {
      //   displayMessage("this username isn't available please try again");
      // } else {
      //   console.log("i/m here wallahi");
      //   window.location.href = "/login.html";
      // }
    })
    .catch((err) => {
      displayMessage("Oops...something went wrong");
    });
});
