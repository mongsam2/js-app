const link = document.querySelector("a");
const loginForm = document.querySelector(".login-form");
const input = loginForm.querySelector("input");
const h1 = document.querySelector("h1");
const loginButton = loginForm.querySelector("button");
const logout = document.querySelector("#logout");

const USERNAME_KEY = "username";
const HIDDEN = "hidden";

function submitLoginForm(event) {
  event.preventDefault();
  const username = input.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN);
  paintGreeting();
  logout.classList.remove("hidden");
}
function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  h1.innerText = `Hello~ ${username}`;
  h1.classList.remove(HIDDEN);
  loginForm.remove();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", submitLoginForm);
} else {
  paintGreeting();
}

// 로그아웃
function logoutClick(event) {
  localStorage.removeItem("username");
}

logout.addEventListener("click", logoutClick);

if (localStorage.getItem("username") === null) {
  logout.classList.add("hidden");
}
