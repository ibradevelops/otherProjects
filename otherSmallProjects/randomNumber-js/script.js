"use strict";

const btn = document.querySelector("#main-btn");
const firstValue = document.querySelector("#first-value");
const secondValue = document.querySelector("#second-value");
const body = document.querySelector("body");
const randomNumberFun = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// zelim da korisnik unese dva broja i klikom na dugme, da izbaci random broj, da se ociste input polja, i da kada ponovo klikne, ne moze obrisati trenutni odgovor
btn.addEventListener("click", function () {
  const lastChild = body.lastElementChild;
  if (lastChild.classList.contains("for-answer")) {
    lastChild.remove();
  }
  const first = +firstValue.value;
  const second = +secondValue.value;
  const randomNumber = randomNumberFun(first, second);
  //
  if (first && second) {
    const answerTxt = document.createElement("h2");
    answerTxt.className = "for-answer";
    answerTxt.textContent = `Your Random Number is ${randomNumber}`;
    body.append(answerTxt);
    if (answerTxt) {
      btn.disabled = true;
      firstValue.value = secondValue.value = "";
    }
  }
});

const provjeri = function (parametar) {
  parametar.addEventListener("input", function () {
    if (firstValue.value && secondValue.value) {
      btn.disabled = false;
    }
  });
};
provjeri(firstValue);
provjeri(secondValue);
