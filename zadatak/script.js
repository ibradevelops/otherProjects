"use strict";
const btn = document.querySelector("button");
const nameInput = document.querySelector(".name-input");
const surnameInput = document.querySelector(".surname-input");
const ageOfBirthInput = document.querySelector(".age-of-birth-input");
const tBody = document.querySelector("tbody");
const delBtn = document.querySelector(".del-btn");

let people = [];
class Person {
  constructor(name, surname, ageOfBirth) {
    this.name = name;
    this.surname = surname;
    this.ageOfBirth = ageOfBirth;
  }
  get userYear() {
    return new Date().getFullYear() - this.ageOfBirth;
  }
}

let i = 0;
const creatingUser = function () {
  const nameInputVal = nameInput.value.trim();
  const surnameInputVal = surnameInput.value.trim();
  const ageOfBirthInputVal = ageOfBirthInput.value.trim();
  if (!nameInputVal || !surnameInputVal || !ageOfBirthInputVal) return;
  const user = new Person(
    nameInput.value,
    surnameInput.value,
    ageOfBirthInput.value
  );
  const { name, surname, ageOfBirth, userYear } = user;
  people.push({
    i: i + 1,
    name,
    surname,
    userYear,
  });
  i++ || people.map((val) => val.i).at(-1);
  localStorage.setItem("people", JSON.stringify(people));
  const counter = document.createElement("td");
  counter.style.textAlign = "left";
  counter.textContent = i;
  nameInput.value = surnameInput.value = ageOfBirthInput.value = "";
  const userName = document.createElement("td");
  userName.textContent = nameEdit(name);
  const userSurname = document.createElement("td");
  userSurname.textContent = nameEdit(surname);
  const userAge = document.createElement("td");
  userAge.textContent = userYear;
  const row = document.createElement("tr");
  row.setAttribute("id", "info-row");
  row.append(counter, userName, userSurname, userAge);
  tBody.append(row);
  Array.from(document.querySelectorAll("input")).map((val) => val.blur());
  function nameEdit(parametar) {
    const firstLetter = parametar.slice(0, 1).toUpperCase();
    const rest = parametar.slice(1).toLowerCase();
    return firstLetter + rest;
  }
};

const deleteAll = function (parametar) {
  parametar.addEventListener("click", () => {
    i = 0;
    document.querySelectorAll("#info-row").forEach((val) => val.remove());
    localStorage.clear();
    people = [];
  });
};

btn.addEventListener("click", creatingUser);
deleteAll(delBtn);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    creatingUser();
  }
});

this.addEventListener("load", () => {
  people = JSON.parse(localStorage.getItem("people")) || [];
  people.map((val) => {
    const html = `
    <tr>
    <td style="text-align:left;">${val.i}</td>
    <td>${val.name}</td>
    <td>${val.surname}</td>
    <td>${val.userYear}</td>
    </tr>
    `;
    tBody.insertAdjacentHTML("beforeend", html);
  });
  Array.from(document.querySelectorAll("tr"))
    .slice(1)
    .map((val) => val.setAttribute("id", "info-row"));
  deleteAll(delBtn);
  if (people) {
    i = +people.map((val) => val.i).slice(-1);
  }
});
