var express = require('express');
var router = express.Router();

const { Game } = require('../models/models');

router.get('/game', (req, res, next) => {
  const gameId = req.session.gameId;

  if (gameId) return next();

  Game.createGame()
    .then(game => {
      req.session.gameId = game._id;
      res.json(game);
    })
    .catch(err => res.sendStatus(400));
});

router.get('/game', (req, res, next) => {
  const gameId = req.session.gameId;

  Game.getGame(gameId)
    .then(game => res.json(game))
    .catch(err => res.sendStatus(400));
});

router.post('/reset', (req, res, next) => {
  const gameId = req.session.gameId;

  Game.resetGame(gameId, (err, game) => {
    if (err) res.sendStatus(400);
    res.json(game);
  });
});

router.post('/:letter', (req, res, next) => {
  const gameId = req.session.gameId;
  const letter = req.params.letter;

  Game.guessLetter(gameId, letter, (err, game) => {
    if (err)  {
      console.log(err);
      res.sendStatus(400);
    }
    res.json(game);
  });
});

module.exports = router;
