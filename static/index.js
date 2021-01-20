const loginContainer = document.getElementById("login-container");
const loginFormOpen = document.getElementById("log-in");
const closeLoginSpan = document.getElementById("close-log");

const signupContainer = document.getElementById("signup-container");
const signupFormOpen = document.getElementById("sign-up");
const closeSignupSpan = document.getElementById("close-sign");

const SpanClose = (span, container) => {
  span.onclick = () => {
    container.style.display = "none";
  };
};

const OpenForm = (btn, container1, container2) => {
  btn.onclick = () => {
    container1.style.display = "flex";
    container2.style.display = "none";
  };
};

window.onclick = (event) => {
  if (event.target == signupContainer || event.target == loginContainer) {
    signupContainer.style.display = "none";
    loginContainer.style.display = "none";
  }
};

SpanClose(closeLoginSpan, loginContainer);
SpanClose(closeSignupSpan, signupContainer);

OpenForm(signupFormOpen, signupContainer, loginContainer);
OpenForm(loginFormOpen, loginContainer, signupContainer);
