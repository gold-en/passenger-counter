"use strict";
const passengers = document.querySelector(".passengers");
const increment = document.querySelector(".increment");
const save = document.querySelector(".save");
const entries = document.querySelector(".entries");
const reset = document.querySelector(".reset");

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

  // const renderedEntries = previousEntries.join("-");

  const renderedEntries = previousEntries
    .map((entry) => `<span class='entered'>${entry}</span>`)
    .join("");

  entries.innerHTML = renderedEntries;
});

reset.addEventListener("click", () => {
  count = 0;
  previousEntries = [];
  entries.textContent = 0;
});
