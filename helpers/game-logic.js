const { generateWord } = require('./WordGenerator');

module.exports = {
  guessLetter,
  resetGame
}

const MAX_ATTEMPTS = 10;

function guessLetter(game, letter) {
  if (!game.status.active || game.guesses.includes(letter)) return;

  if (game.word.includes(letter)) {
    const idxsToReplace = findLetterInWord(game.word, letter);
    game.wordMask = replaceLettersInMask(game.wordMask, idxsToReplace, letter);
  } else {
    game.errorCount += 1;
  }
  game.guesses.push(letter);

  updateStatus(game);

  return game;
}

function resetGame(game) {
  const word = generateWord();

  game.word = word;
  game.wordMask = Array(word.length).fill('_');
  game.guesses = [];
  game.errorCount = 0;

  game.gamesPlayed += 1;
  if (game.status.won) game.gamesWon += 1;

  game.status = { active: true, won: false };
}

// Private
function findLetterInWord(word, letter) {
  return word.split('').reduce((acc, ele, idx) => {
    if (ele == letter) acc.push(idx);
    return acc;
  }, []);
}

function replaceLettersInMask(wordMask, idxs, letter) {
  return wordMask.map((ele, idx) => (idxs.includes(idx)) ? letter : ele);
}

function updateStatus(game) {
  const hasWon = !game.wordMask.includes('_');
  const hasLost = game.errorCount >= MAX_ATTEMPTS;

  game.status.active = !(hasWon || hasLost);
  game.status.won = hasWon;
}
