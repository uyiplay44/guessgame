"use strict";

function DiceGame() {
  let RandomNumber1 = Math.random() * 6 + 1;
  let RandomNumber2 = Math.random() * 6 + 1;
  let player1 = parseInt(RandomNumber1);
  let player2 = parseInt(RandomNumber2);

  document.getElementById("img1").src = `/image/dice-${player1}` + ".png";
  document.getElementById("img2").src = `/image/dice-${player2}` + ".png";

  if (player1 > player2) {
    document.getElementById("result").textContent = "PLAYER 1 Won";
    document.body.style.backgroundColor = "yellow";
  } else if (player2 > player1) {
    document.getElementById("result").textContent = "PLAYER 2 Won";
    document.body.style.backgroundColor = "blue";
  } else {
    document.getElementById("result").textContent = "PLAYER Draw Game";
    document.body.style.backgroundColor = "green";
  }
}
