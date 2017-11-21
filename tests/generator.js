module.exports = {
  newGame,
  closeToWin,
  closeToLoss,
  wonGame
};

function newGame() {
  return {
    "word": "hangman",
    "wordMask": ["_", "_", "_", "_", "_", "_", "_"],
    "guesses": [],
    "errorCount": 0,
    "gamesPlayed": 0,
    "gamesWon": 0,
    "status": {
      "active": true,
      "won": false
    }
  }
}

function closeToWin() {
  return {
    "word": "hangman",
    "wordMask": ["h", "a", "n", "g", "_", "a", "n"],
    "guesses": ["h", "a", "n", "g"],
    "errorCount": 0,
    "gamesPlayed": 0,
    "gamesWon": 0,
    "status": {
      "active": true,
      "won": false
    }
  }
}

function closeToLoss() {
  return {
    "word": "hangman",
    "wordMask": ["_", "_", "_", "_", "_", "_", "_"],
    "guesses": ["q","w","e","r","t","y","u","i","o"],
    "errorCount": 9,
    "gamesPlayed": 0,
    "gamesWon": 0,
    "status": {
      "active": true,
      "won": false
    }
  }
}

function wonGame() {
  return {
    "word": "hangman",
    "wordMask": ["h", "a", "n", "g", "m", "a", "n"],
    "guesses": ["h", "a", "n", "g", "m"],
    "errorCount": 0,
    "gamesPlayed": 0,
    "gamesWon": 0,
    "status": {
      "active": false,
      "won": true
    }
  }
}
