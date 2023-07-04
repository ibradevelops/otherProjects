"use strict";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const weatherContainer = document.querySelector(".weather__container");

const generateCityWeather = function (place) {
  const html = ` 
  <div class="box">
        <div class="first--side">
        <img src=${place.current.condition.icon} class="weather--image" />
        </div>
        <div class="second--side">
          <span class="first-span">
            <p class="weather--place">${place.location.name}🏙️,</p>
            <p class="weather--temperature">${place.current.temp_c}°</p>
          </span>
          <span class="second-span">
            <p class="weather--type">${place.current.condition.text}🔮</p>
            <p class="weather--feeling">Feels like ${
              place.current.feelslike_c
            }🌡️</p>
          </span>
          <div class="third-span">
            <div class="weather--humidity">Humidity ${
              place.current.humidity
            }%💦</div>
            <div class="weather--wind">Wind kp/h ${
              place.current.wind_kph
            }💨</div>
          </div>
          <div class="fourth-span">
            <p>${new Date().toDateString()}
            </p>
          </div>
        </div>
      </div>
  `;
  weatherContainer.insertAdjacentHTML("beforeend", html);
};

const weatherFunction = function () {
  if (!input.value) return;
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=29e003b5500f41d9add100348232703&q=${input.value}`
  )
    .then((response) => {
      if (!response.ok) {
        weatherContainer.innerHTML = "";
        throw new Error("Location unavailable 😕");
      }
      return response.json();
    })
    .then((data) => {
      weatherContainer.innerHTML = "";
      generateCityWeather(data);
    })
    .catch((err) => {
      weatherContainer.innerHTML = `
      <h1 class="error--msg">
      ${err.message}
      </h1>
      `;
      console.error(err.message);
    })
    .finally(() => {
      input.value = "";
      input.blur();
    });
};

btn.addEventListener("click", weatherFunction);
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    weatherFunction();
  }
});
