"use strict";
const deleteThings = document.querySelector(".delete");
const result = document.querySelector(".result");
const displayResult = document.querySelector("#display-result");
const numbers = document.querySelectorAll(".num");
const removeOneChar = document.querySelector(".cl");

removeOneChar.addEventListener("click", () => {
  displayResult.value = displayResult.value.slice(0, -1);
});
numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    displayResult.value += number.textContent;
  });

  deleteThings.addEventListener("click", function () {
    displayResult.value = "";
  });
  result.addEventListener("click", function () {
    displayResult.value = eval(displayResult.value);
    if (displayResult.value.length > 4) {
      displayResult.value = displayResult.value.slice(0, 5);
    }
  });
});
