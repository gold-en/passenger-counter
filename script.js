"use strict";
const passengers = document.querySelector(".passengers");
const increment = document.querySelector(".increment");
const save = document.querySelector(".save");
const entries = document.querySelector(".entries");

let count = 0;
let previousEntries = [];

increment.addEventListener("click", () => {
  count++;
  passengers.textContent = count;
});

save.addEventListener("click", () => {
  passengers.textContent = 0;

  previousEntries = [...previousEntries, count];
  count = 0;

  const renderedEntries = previousEntries.join("-");

  entries.textContent = renderedEntries;
});
