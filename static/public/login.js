const loginForm = document.getElementById("log-in-form");
const userName = document.getElementById("user-name");
const userPassword = document.getElementById("user-password");
const loginContainer = document.getElementById("log-in");

const displayMessage = (msgText) => {
  const messageP = document.createElement("p");
  messageP.textContent = msgText;
  loginContainer.appendChild(messageP);
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userName.value,
      password: userPassword.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 400) {
        displayMessage(res.error);
      } else if (res.status === 500) {
        displayMessage("something went wrong");
      } else {
        window.location.href = "/restaurants.html";
      }
    });
});
