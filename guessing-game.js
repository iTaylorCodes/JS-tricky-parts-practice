function guessingGame() {
  const target = Math.floor(Math.random() * 100);
  let guessCount = 0;
  let gameWon = false;
  return function game(guess) {
    if (gameWon) return "The game is over, you already won!";
    guessCount++;
    if (target > guess) {
      return `${guess} is too low!`;
    } else if (target < guess) {
      return `${guess} is too high!`;
    } else {
      gameWon = true;
      return `You win! You found ${target} in ${guessCount} guesses.`;
    }
  };
}

module.exports = { guessingGame };
