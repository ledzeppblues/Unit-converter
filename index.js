"use strict";
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("btn");
const lengthEl = document.querySelector(".length");
const volumeEl = document.querySelector(".volume");
const massEl = document.querySelector(".mass");

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// meter to feet
function meterToFeet() {
  const inputValue = Number(inputEl.value);
  if (!inputValue) {
    return;
  } else {
    let meter = 3.281;

    //let result = `20m = 65.616 ft | 20 ft = 6.096m`;
    let result = `${inputValue}m = ${(inputValue * meter).toFixed(
      2
    )} ft | ${inputValue} ft = ${(inputValue / meter).toFixed(2)}m`;

    lengthEl.innerHTML = result;
  }
}

// litre to gallon
function literToGallon() {
  const inputValue = Number(inputEl.value);

  if (!inputValue) {
    return;
  } else {
    let liter = 0.264;

    // 20L = 5.284 gal | 20 gal = 75.708L
    let result = `${inputValue}L = ${(inputValue * liter).toFixed(
      2
    )} gal | ${inputValue} gal = ${(inputValue / liter).toFixed(2)} L`;

    volumeEl.innerHTML = result;
  }
}

// kg to pounds
function kgToPounds() {
  const inputValue = Number(inputEl.value);
  if (!inputValue) {
    return;
  } else {
    let kilogram = 2.204;

    let result = `${inputValue} kg = ${(inputValue * kilogram).toFixed(
      2
    )} lbs | ${inputValue} lbs = ${(inputValue / kilogram).toFixed(2)} kg`;

    massEl.innerHTML = result;
  }
}

buttonEl.addEventListener("click", function () {
  meterToFeet();
  literToGallon();
  kgToPounds();
});
