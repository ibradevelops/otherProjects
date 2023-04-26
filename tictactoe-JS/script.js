"use strict";
const inputs = document.querySelectorAll("input");
const currentPlayer = document.querySelector(".current__player");
const msg = document.querySelector(".winner__message");
const x = "X";
const o = "O";
const [
  firstInput,
  secondInput,
  thirdInput,
  fourthInput,
  fifthInput,
  sixthInput,
  seventhInput,
  eightInput,
  ninthInput,
] = inputs;
let play = true;
let ar = [];
//
//
inputs.forEach((i) => {
  i.addEventListener("click", (e) => {
    const currentTarget = e.target;
    i.disabled = true;
    if (play === true) {
      currentTarget.value = x;
      currentPlayer.textContent = "O";
      currentTarget.id = "X";
      play = false;
    } else {
      currentTarget.value = o;
      currentPlayer.textContent = "X";
      currentTarget.id = "O";
      play = true;
    }
    ar.push(i.id);
    const checkWinner = function () {
      if (firstInput.id === x && secondInput.id === x && thirdInput.id === x) {
        playerXwin();
      } else if (
        fourthInput.id === x &&
        fifthInput.id === x &&
        sixthInput.id === x
      ) {
        playerXwin();
      } else if (
        seventhInput.id === x &&
        eightInput.id === x &&
        ninthInput.id === x
      ) {
        playerXwin();
      } else if (
        firstInput.id === x &&
        fourthInput.id === x &&
        seventhInput.id === x
      ) {
        playerXwin();
      } else if (
        secondInput.id === x &&
        fifthInput.id === x &&
        eightInput.id === x
      ) {
        playerXwin();
      } else if (
        thirdInput.id === x &&
        sixthInput.id === x &&
        ninthInput.id === x
      ) {
        playerXwin();
      } else if (
        firstInput.id === x &&
        fifthInput.id === x &&
        ninthInput.id === x
      ) {
        playerXwin();
      } else if (
        thirdInput.id === x &&
        fifthInput.id === x &&
        seventhInput.id === x
      ) {
        playerXwin();
        //////////////////////////////////
      } else if (
        fourthInput.id === o &&
        fifthInput.id === o &&
        sixthInput.id === o
      ) {
        playerOwin();
      } else if (
        seventhInput.id === o &&
        eightInput.id === o &&
        ninthInput.id === o
      ) {
        playerOwin();
      } else if (
        firstInput.id === o &&
        fourthInput.id === o &&
        seventhInput.id === o
      ) {
        playerOwin();
      } else if (
        secondInput.id === o &&
        fifthInput.id === o &&
        eightInput.id === o
      ) {
        playerOwin();
      } else if (
        thirdInput.id === o &&
        sixthInput.id === o &&
        ninthInput.id === o
      ) {
        playerOwin();
      } else if (
        firstInput.id === o &&
        fifthInput.id === o &&
        ninthInput.id === o
      ) {
        playerOwin();
      } else if (
        thirdInput.id === o &&
        fifthInput.id === o &&
        seventhInput.id === o
      ) {
        playerOwin();
      } else if (ar.length === 9) {
        draw();
      }
    };
    checkWinner();
  });
});

function playerXwin() {
  msg.innerHTML = "Player X won the game</br>Click here to restart a game";
  finalStyling();
}

function playerOwin() {
  msg.innerHTML = "Player O won the game</br>Click here to restart a game";

  finalStyling();
}

function draw() {
  msg.innerHTML = "Its DRAW!</br>Click here to restart a game";
  finalStyling();
}

//
function finalStyling() {
  msg.style.textAlign = "center";
  msg.style.padding = "1rem";
  msg.style.fontSize = "3.2rem";
  msg.style.cursor = "pointer";
  for (const input of inputs) {
    input.disabled = true;
  }
  msg.addEventListener("click", () => {
    location.reload();
  });
  //
}
