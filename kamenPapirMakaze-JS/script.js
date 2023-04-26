"use strict";
const tools = document.querySelectorAll(".tool");
const toolsContainer = document.querySelector("tools-for-game");
const mainTitle = document.querySelector(".main-title");
const pickMove = document.querySelector("h2");
const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".pre-container-2");
const realPlayer = document.querySelector(".real-player");
const computerPlayer = document.querySelector(".computer-player");
const restartBtn = document.querySelector(".restart-btn");
//
//
restartBtn.classList.add("visib");

tools.forEach((t) => {
  t.addEventListener("click", function (e) {
    restartBtn.disabled = true;
    const waitTime = +String(Math.trunc(Math.random() * 2) + 1).padEnd(4, 0);
    //
    const imenaAlata = ["paper", "rock", "scissors"];
    const brojAlata = Math.trunc(Math.random() * imenaAlata.length);
    const html1 = `
          <h1 class="waiting-h1">Waiting for Player 2...</h1>
        `;
    const html2 = `
        <h1 class="player-title">Player 2 (Computer)</h1>
        <div class="tool">
        <img src="${imenaAlata[brojAlata]}.png" alt="" id="${imenaAlata[brojAlata]}"/>
        <p class="name-of-tool" >${imenaAlata[brojAlata]}</p>
        </div>
        `;
    computerPlayer.insertAdjacentHTML("beforeend", html1);
    const time = setTimeout(() => {
      e.preventDefault();
      computerPlayer.innerHTML = "";
      computerPlayer.insertAdjacentHTML("beforeend", html2);
      restartBtn.classList.remove("visib");
    }, waitTime);
    //
    container1.classList.add("hide");
    container2.classList.remove("hide");
    const currentElement = e.target.closest(".tool");
    //
    for (const singleTool of tools) {
      singleTool.classList.add("hide");
    }
    //
    currentElement.classList.remove("hide");
    realPlayer.append(currentElement);

    //
    mainTitle.classList.add("hide");
    pickMove.classList.add("hide");
    //// final functions
    const draw = function () {
      restartBtn.disabled = false;
      setTimeout(() => {
        alert("It's Draw.\nClick Restart button to play again!");
      }, time);
    };
    //
    const playerTwoWins = function () {
      restartBtn.disabled = false;
      setTimeout(() => {
        alert("Player 2 (Computer) Won!\nClick Restart button to play again!");
      }, time);
    };
    //
    const playerOneWins = function () {
      restartBtn.disabled = false;
      setTimeout(() => {
        alert("Player 1 (You) Won!\nClick Restart button to play again!");
      }, time);
    };
    //////
    setTimeout(() => {
      const firstPlayer = realPlayer.firstElementChild.firstElementChild.id;
      const secondPlayer = computerPlayer.lastElementChild.firstElementChild.id;
      if (firstPlayer === "rock" && secondPlayer === "rock") {
        draw();
      } else if (firstPlayer === "paper" && secondPlayer === "paper") {
        draw();
      } else if (firstPlayer === "scissors" && secondPlayer === "scissors") {
        draw();
      } else if (firstPlayer === "rock" && secondPlayer === "paper") {
        playerTwoWins();
      } else if (firstPlayer === "paper" && secondPlayer === "rock") {
        playerOneWins();
      } else if (firstPlayer === "scissors" && secondPlayer === "rock") {
        playerTwoWins();
      } else if (firstPlayer === "rock" && secondPlayer === "scissors") {
        playerOneWins();
      } else if (firstPlayer === "paper" && secondPlayer === "scissors") {
        playerTwoWins();
      } else if (firstPlayer === "scissors" && secondPlayer === "paper") {
        playerOneWins();
      }
    }, waitTime);
  });
});

restartBtn.addEventListener("click", function () {
  location.reload();
});

// one thing remaining - onemoguciti da se alat nakon sto je odabran, klikice i pritom dodaje nove alate.
