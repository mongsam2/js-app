const personalList = document.querySelector(".personal");
const personalButton = personalList.querySelector(".add-button");
const personalForm = personalList.querySelector(".list-form");
const personalInput = personalForm.querySelector("input");
const listButton = document.querySelectorAll(".add-button");

function ButtonClick(event) {
  const target = event.target.parentElement.classList[0];
  const button = document.querySelector(`.${target} .add-button`);
  const form = document.querySelector(`.${target} .list-form`);
  const input = form.querySelector("input");
  button.classList.add("hidden");
  form.classList.remove("hidden");
  input.focus();
  input.addEventListener("focusout", focusout);
  form.addEventListener("submit", submit);
}
function focusout(event) {
  const target = event.target.classList[0];
  const form = document.querySelector(`.${target} .list-form`);
  const button = document.querySelector(`.${target} .add-button`);
  event.target.value = "";
  form.classList.add("hidden");
  button.classList.remove("hidden");
}
function submit(event) {
  event.preventDefault();
  const input = event.target.querySelector("input");
  const target = input.classList[0];
  const inputText = input.value;
  input.value = "";
  addListElement(target, inputText);
}
function addListElement(target, text) {
  const ul = document.querySelector(`.${target}`);
  const newElement = document.createElement("li");
  const newButton = document.createElement("button");
  const buttonIcon = document.createElement("i");
  buttonIcon.classList.add("fa-solid");
  buttonIcon.classList.add("fa-square-check");
  newButton.appendChild(buttonIcon);
  newElement.classList.add("list-element");
  newElement.innerHTML = `<span>${text}</span>`;
  newElement.appendChild(newButton);
  ul.appendChild(newElement);
}
listButton.forEach((element) => element.addEventListener("click", ButtonClick));
