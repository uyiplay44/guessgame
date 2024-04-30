"use strict";

let wrapperEl = document.getElementById("wrapper").value;
let guessEl = document.getElementById("guess").value;
let guessFl = document.getElementById("guessField");
let lowOrHi = document.querySelector(".lowOrHi");
let myForm = document.getElementById("form");

let random = Math.floor(Math.random() * 100) / +1;
let sumScore = parseInt(random);
let presentGuess = 0;

// console.log(lowOrHi);

myForm.addEventListener("click", (e) => {
  e.preventDefault();
});

function guessnum() {
  if (!guessFl > 1 || !guessFl > 100) {
    lowOrHi.textContent = "Try Again too high";
    alert("Hello World");
  }
}
