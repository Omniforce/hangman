var express = require('express');
var router = express.Router();

const { Game } = require('../models/models');

router.get('/start', (req, res, next) => {
  Game.createGame()
    .then(game => {
      req.session.gameId = game._id;
      res.json(game);
    })
    .catch(err => res.send(400));
});

router.get('/status', (req, res, next) => {
  const gameId = req.session.gameId;

  Game.getGame(gameId)
    .then(game => res.json(game))
    .catch(err => res.send(400));
});

router.post('/:letter', (req, res, next) => {
  const gameId = req.session.gameId;
  const letter = req.params.letter;

  Game.guessLetter(gameId, letter, (err, game) => {
    if (err) res.send(400);
    res.json(game);
  });
});

module.exports = router;
