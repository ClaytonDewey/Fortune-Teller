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

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {Array}       The shuffled array
 */
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
