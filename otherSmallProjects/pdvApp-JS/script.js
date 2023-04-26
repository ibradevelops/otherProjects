"use strict";
const btnAdd = document.querySelector(".calc-btn");
const section = document.querySelector(".calculator");
const input = document.querySelector("input");

input.addEventListener("input", function () {
  if (input.value.length > 7) {
    input.value = input.value.slice(0, 7);
  }
});

btnAdd.addEventListener("click", function () {
  const inputNum = Number(input.value);
  if (inputNum) {
    const calculating = Math.round((inputNum * 17) / 100);
    const result = document.createElement("p");
    const btnDel = document.createElement("button");
    const newSection = document.createElement("section");
    newSection.setAttribute("class", "new-section");
    section.appendChild(newSection);
    result.setAttribute("class", "result");
    newSection.appendChild(result);
    newSection.appendChild(btnDel);
    btnDel.textContent = "Obriši";
    btnDel.setAttribute("class", "btn-remove");
    result.textContent = `Iznos vašeg PDV je ${calculating}KM, a sveukupno iznosi ${
      inputNum + calculating
    }KM.`;

    if (result) {
      btnAdd.disabled = true;
      btnAdd.style.cursor = "default";
      input.disabled = true;
      btnDel.style.cursor = "pointer";
    }
    btnDel.addEventListener("click", function () {
      input.value = "";
      btnAdd.disabled = false;
      newSection.removeChild(result);
      newSection.removeChild(btnDel);
      input.disabled = false;
    });
  }
});

