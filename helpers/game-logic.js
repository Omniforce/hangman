module.exports = {
  getNewWord,
  guessLetter,
}

function getNewWord() {
  return "hangman";
}

function guessLetter(game, letter) {
  if (game.guesses.includes(letter)) return game;

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
  if (game.errorCount >= 10) {
    game.status.active = false;
    game.status.won = false;
  }

  if (!game.wordMask.includes('_')) {
    game.status.active = false;
    game.status.won = true;
  }
}
