"use strict";

const expect = require('chai').expect;
const { newGame, closeToWin, closeToLoss, wonGame } = require('./generator');

const { guessLetter, resetGame } = require('../helpers/game-logic');

describe("Game Logic", () => {
  describe("Guess Letter", () => {
    it('should add guessed letter to guesses', () => {
      let game = newGame();

      guessLetter(game, 'h');

      expect(game.guesses).to.include('h');
    });

    it('should correctly update word mask on correct guess', () => {
      let game = newGame();

      guessLetter(game, 'h');

      expect(game.wordMask[0]).to.equal('h');
    });

    it('should increase error count on incorrect guess', () => {
      let game = newGame();

      guessLetter(game, 'q');

      expect(game.errorCount).to.equal(1);
    });

    it('should end game and mark as won when word has been guessed', () => {
      let game = closeToWin()

      guessLetter(game, 'm');

      expect(game.status.active).to.equal(false);
      expect(game.status.won).to.equal(true);
    });

    it('should end game and mark as lost when error count reaches 10', () => {
      let game = closeToLoss();

      guessLetter(game, 'p');

      expect(game.status.active).to.equal(false);
      expect(game.status.won).to.equal(false);
    });
  });

  describe("Reset Game", () => {
    it('should increment games played', () => {
      let game = newGame();

      resetGame(game);

      expect(game.gamesPlayed).to.equal(1);
    });

    it('should select a new word and update word mask', () => {
      let game = newGame();

      resetGame(game);

      expect(game.word).to.be.a('string');
      expect(game.wordMask.length).to.equal(game.word.length);
    });

    it('should increment games won if game has been won', () => {
      let game = wonGame();
      game = resetGame(game);

      expect(game.gamesWon).to.equal(1);
    });
  });
});
