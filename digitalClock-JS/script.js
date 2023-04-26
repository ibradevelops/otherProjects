"use strict";
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const date = document.querySelector(".date");
const options = { dateStyle: "full" };
//
setInterval(() => {
  second.textContent = `${String(new Date().getSeconds()).padStart(2, 0)}`;
  minute.textContent = `${String(new Date().getMinutes()).padStart(2, 0)}:`;
  hour.textContent = `${String(new Date().getHours()).padStart(2, 0)}:`;
  date.textContent = `${new Intl.DateTimeFormat(
    "sr-Latn-BA",
    options
  ).format()}`;
});
