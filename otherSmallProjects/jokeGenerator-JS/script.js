"use strict";
const btn = document.querySelector("button");
const text = document.querySelector("p");

const generateJoke = async function () {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    );
    const data = await response.json();
    const joke = await data.joke;
    text.textContent = joke;
  } catch (err) {
    text.textContent = `${err.message} 😕, please try again.`;
  }
};

btn.addEventListener("click", function () {
  generateJoke();
});
