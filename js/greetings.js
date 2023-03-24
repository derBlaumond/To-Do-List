const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const time = new Date();
const hours = time.getHours();

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  if (hours > 6 && hours <= 12) {
    greeting.innerText = `Good Morning, ${username}!!`;
  } else if (hours > 12 && hours <= 18) {
    greeting.innerText = `Good Afternoon, ${username}!!`;
  } else if (hours > 18 && hours <= 24) {
    greeting.innerText = `Good Evening, ${username}!!`;
  } else if (hours <= 6) {
    greeting.innerText = `Good Night, ${username}!!`;
  }

  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
