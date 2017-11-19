const mongoose = require("mongoose");
const { generateWord } = require('../../helpers/WordGenerator');

const GameSchema = new mongoose.Schema({
  word: String,
  wordMask: [String],
  guesses: { type: [String], default: [] },
  errorCount: { type: Number, default: 0 },
  gamesPlayed: { type: Number, default: 0 },
  gamesWon: { type: Number, default: 0 },
  status: {
    active: { type: Boolean, default: true },
    won: Boolean
  }
});

module.exports = GameSchema;
