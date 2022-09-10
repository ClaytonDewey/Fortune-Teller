// Get the DOM elements
const btn = document.querySelector("button");
const fortune = document.querySelector("#fortune");

/**
 * Get the fortune and render it into the DOM
 */
function getFortune() {
  fortune.textContent = `You're going to have a wonderful day!`;
}

// Listen for the clicks on the button
btn.addEventListener("click", getFortune);
