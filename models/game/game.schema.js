const mongoose = require("mongoose");

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
}, { usePushEach: true });

module.exports = GameSchema;
