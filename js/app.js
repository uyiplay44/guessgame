"use strict";
const form = document.getElementById(".myform");

// document.querySelector("p").innerHTML = "welcome home";

// document.querySelectorAll("p")[0].innerHTML = "welcome home 1";

// document.querySelectorAll("p")[1].innerHTML = "welcome home 2";

// document.querySelectorAll("p")[2].innerHTML = "welcome home 3";

// document.querySelectorAll("p")[3].innerHTML = "welcome home 4";

function sum() {
  const numEl = document.getElementById("num1").value;
  const numbEl = document.getElementById("num2").value;

  let total = +numEl + +numbEl;

  document.querySelector("#result").innerHTML = total;
}

function minuSum() {
  let num1 = document.getElementById("num1").value;
  let numEl = document.getElementById("num2").value;

  let total = num1 - numEl;

  document.querySelector("#result").innerHTML = total;
}

function divideSum() {
  const num1 = document.getElementById("num1").value;
  const numEl = document.getElementById("num2").value;

  let total = num1 / numEl;

  document.querySelector("#result").innerHTML = total;
}

function multplySum() {
  const num1 = document.getElementById("num1").value;
  const numEl = document.getElementById("num2").value;

  let total = num1 * numEl;

  document.querySelector("#result").innerHTML = total;
}
