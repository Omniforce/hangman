const mongoose = require('mongoose');

const GameSchema = require('./game.schema');
const Game = mongoose.model('Game', GameSchema);

const gameLogic = require('../../helpers/game-logic');

module.exports = {
  createGame,
  deleteGame,
  getGame,
  guessLetter,
};

function createGame() {
  const newWord = gameLogic.getNewWord();

  return Game.create({
    word: newWord,
    wordMask: Array(newWord.length).fill('_')
  });
}

function getGame(gameId) {
  return Game.findById(gameId);
}

function guessLetter(gameId, letter, cb) {
  return Game.findById(gameId, (err, game) => {
    gameLogic.guessLetter(game, letter);
    return game.save(cb);
  });
}

function deleteGame(gameId) {
  return Game.findByIdAndRemove(gameId);
}
