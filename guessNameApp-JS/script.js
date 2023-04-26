"use strict";
const parentElement = document.querySelector(".third-part");
const inputName = document.getElementById("input-name");
const btn = document.getElementById("btn-check");
const closeIcon = document.querySelector(".close-icon");
const maleIcon = document.querySelector(".male-png");
const femaleIcon = document.querySelector(".female-png");
const deleteFromInputIcon = document.querySelector(".delete-from-input");

const numbersAndCharacters = ['1234567890-=!@#$%^&*()_+:"{}|[;/.,<>']
  .at(0)
  .split("");
//
const muskaImenaSaZadnjimSlovomA = [
  "Nebojša",
  "Pera",
  "Aleksa",
  "Andreja",
  "Sava",
  "Tadija",
  "Luka",
  "Strahinja",
  "Ivica",
  "Mateja",
  "Vlada",
  "Nikola",
  "Dragiša",
  "Ljubiša",
  "Noa",
  "Borna",
  "Hamza",
  "Meša",
  "Nebojsa",
  "Dragisa",
  "Ljubisa",
];

const tryIt = function () {
  if (inputName.value) {
    const inputNameLower = inputName.value.toLowerCase();
    const inputNameLowerRest = inputNameLower.slice(1);
    const inputNameUpper = inputName.value.slice(0, 1).toUpperCase();
    const lastWord = inputNameLower.slice(-1);
    deleteFromInputIcon.classList.add("hide");
    //
    let displayMsg = document.createElement("h2");
    displayMsg.setAttribute("class", "answer-msg");
    parentElement.appendChild(displayMsg);
    closeIcon.classList.remove("hide");
    parentElement.appendChild(closeIcon);
    const fullName = inputNameUpper + inputNameLowerRest;
    inputName.value = "";
    //

    if (numbersAndCharacters.some((val) => fullName.includes(val))) {
      displayMsg.textContent = "Ime isključivo mora sadržati slova!";
    } else if (inputNameLower.length < 3) {
      displayMsg.textContent = "Ime mora imati više od 2 slova!";
      displayMsg.style.color = "white";
      maleIcon.classList.add("hide");
      femaleIcon.classList.add("hide");
    } else if (
      lastWord !== "a" ||
      muskaImenaSaZadnjimSlovomA.some((val) => fullName.includes(val))
    ) {
      displayMsg.style.color = "#007FFF";
      displayMsg.textContent = `${fullName} je muško ime`;
      maleIcon.classList.remove("hide");
    } else {
      displayMsg.style.color = "#FF1493";
      displayMsg.textContent = `${fullName} je žensko ime`;
      femaleIcon.classList.remove("hide");
    }
    //
    if (displayMsg) {
      inputName.disabled = true;
      inputName.style.opacity = ".2";
      btn.disabled = true;
      btn.style.opacity = ".2";
      btn.style.pointerEvents = "none";
    }

    ///////////////////////////////////
    // Zatvori ikona //
    closeIcon.addEventListener("click", function () {
      closeIcon.classList.add("hide");
      maleIcon.classList.add("hide");
      femaleIcon.classList.add("hide");
      displayMsg.textContent = "";
      deleteFromInputIcon.classList.add("hide");
      inputName.value = "";
      //
      inputName.disabled = false;
      inputName.style.opacity = "1";
      btn.disabled = false;
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
    });
  }
};
inputName.addEventListener("input", function () {
  inputName.value = inputName.value.slice(0, 12);
  deleteFromInputIcon.classList.remove("hide");
  deleteFromInputIcon.addEventListener("click", function () {
    deleteFromInputIcon.classList.add("hide");
    inputName.value = "";
  });
  if (inputName.value === "") {
    deleteFromInputIcon.classList.add("hide");
  }
  //
});

btn.addEventListener("click", tryIt);
//
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    tryIt();
    inputName.blur();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    e.preventDefault();
  }
});
