const expect = require('chai').expect;

const { newGame, closeToWin, closeToLoss, wonGame } = require('./generator');
const { guessLetter, resetGame } = require('../helpers/game-logic');

describe("Game Logic", () => {
  describe("Guess Letter", () => {
    it('should add guessed letter to guesses', () => {
      let game = newGame();

      guessLetter(game, 'h');

      expect(game.guesses).to.deep.equal(['h']);
    });

    it('should correctly update word mask on correct guess', () => {
      let game = newGame();

      expect(game.wordMask).to.deep.equal(['_','_','_','_','_','_','_']);

      guessLetter(game, 'h');

      expect(game.wordMask).to.deep.equal(['h','_','_','_','_','_','_']);
    });

    it('should increase error count on incorrect guess', () => {
      let game = newGame();

      expect(game.errorCount).to.equal(0);

      guessLetter(game, 'q');

      expect(game.errorCount).to.equal(1);
    });

    it('should end game and mark as won when word has been guessed', () => {
      let game = closeToWin()

      expect(game.status).to.deep.equal({ active: true, won: false });

      guessLetter(game, 'm');

      expect(game.status).to.deep.equal({ active: false, won: true });
    });

    it('should end game and mark as lost when error count reaches 10', () => {
      let game = closeToLoss();

      expect(game.status).to.deep.equal({ active: true, won: false });

      guessLetter(game, 'p');

      expect(game.status).to.deep.equal({ active: false, won: false });
    });

    it('should not change game state if letter has already been guessed', () => {
      let game = closeToWin();

      guessLetter(game, 'h');

      expect(game).to.deep.equal(closeToWin());
    });
  });

  describe("Reset Game", () => {
    it('should increment games played', () => {
      let game = newGame();

      expect(game.gamesPlayed).to.equal(0);

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

      expect(game.gamesWon).to.equal(0);

      resetGame(game);

      expect(game.gamesWon).to.equal(1);
    });
  });
});
