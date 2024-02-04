const personalList = document.querySelector(".personal");
const personalButton = personalList.querySelector(".add-button");
const personalForm = personalList.querySelector(".list-form");
const personalInput = personalForm.querySelector("input");
const listButton = document.querySelectorAll(".add-button");

let workDB = [];
let personalDB = [];
let removeDB = [];
const WORK_KEY = "work";
const PERSONAL_KEY = "personal";

listButton.forEach((element) => element.addEventListener("click", ButtonClick));
if (localStorage.getItem(WORK_KEY) !== null) {
  workDB = JSON.parse(localStorage.getItem(WORK_KEY));
}
if (localStorage.getItem(PERSONAL_KEY) !== null) {
  personalDB = JSON.parse(localStorage.getItem(PERSONAL_KEY));
}
workDB.forEach((element) => addListElement("work", element));
personalDB.forEach((element) => addListElement("personal", element));
console.log(workDB);
console.log(personalDB);

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
  const listObj = { id: Date.now(), text: inputText };
  input.value = "";
  if (target === "work") {
    workDB.push(listObj);
    localStorage.setItem(WORK_KEY, JSON.stringify(workDB));
    addListElement(target, listObj);
  } else if (target === "personal") {
    personalDB.push(listObj);
    localStorage.setItem(PERSONAL_KEY, JSON.stringify(personalDB));
    addListElement(target, listObj);
  }
}
function addListElement(target, obj) {
  const ul = document.querySelector(`.${target}`);
  const newElement = document.createElement("li");
  const newButton = document.createElement("button");
  const buttonIcon = document.createElement("i");
  buttonIcon.classList.add("fa-solid");
  buttonIcon.classList.add("fa-square-check");
  newButton.classList.add("non-check");
  newButton.appendChild(buttonIcon);
  newElement.classList.add("list-element");
  newElement.id = obj.id;
  newElement.innerHTML = `<span>${obj.text}</span>`;
  newElement.appendChild(newButton);
  ul.appendChild(newElement);
  newButton.addEventListener("click", checkButton);
}
function checkButton(event) {
  const button = event.target.parentElement;
  const li = event.target.parentElement.parentElement;
  if (button.className === "non-check") {
    removeDB.push(li.id);
  } else {
    removeDB.filter((element) => {
      element !== li.id;
    });
  }
  button.classList.toggle("check");
  button.classList.toggle("non-check");
}
function refreshClick(event) {
  workDB = workDB.filter((element) => !removeDB.includes(String(element.id)));
  localStorage.setItem(WORK_KEY, JSON.stringify(workDB));
  personalDB = personalDB.filter(
    (element) => !removeDB.includes(String(element.id))
  );
  localStorage.setItem(PERSONAL_KEY, JSON.stringify(personalDB));
  removeDB = [];
}

const refresh = document.querySelector("#refresh");
refresh.addEventListener("click", refreshClick);
