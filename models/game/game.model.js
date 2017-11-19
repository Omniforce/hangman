const mongoose = require('mongoose');

const GameSchema = require('./game.schema');
const Game = mongoose.model('Game', GameSchema);

const gameLogic = require('../../helpers/game-logic');
const { generateWord } = require('../../helpers/WordGenerator');

module.exports = {
  createGame,
  deleteGame,
  getGame,
  guessLetter,
  resetGame,
};

function createGame() {
  const newWord = generateWord();

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

function resetGame(gameId, cb) {
  return Game.findById(gameId, (err, game) => {
    gameLogic.resetGame(game);
    return game.save(cb);
  });
}

function deleteGame(gameId) {
  return Game.findByIdAndRemove(gameId);
}
