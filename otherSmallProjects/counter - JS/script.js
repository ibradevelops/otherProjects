const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const restBtn = document.querySelector(".rest-btn");
const counter = document.querySelector("h1");
let count = 0;
counter.textContent = count;

addBtn.addEventListener("click", function () {
  counter.textContent = 1 + count++;
});

removeBtn.addEventListener("click", function () {
  if (count > 0) {
    counter.textContent = count-- - 1;
  } else {
    count = 0;
  }
});

restBtn.addEventListener("click", function () {
  counter.textContent = 0;
  count = 0;
});
