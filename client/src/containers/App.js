import React, { Component } from 'react';

import { startGame, getGameStatus, guessLetter } from '../services/api';

import GameOverModel from '../components/GameOverModal';
import Header from '../components/Header';
import Game from '../components/Game';
import Word from '../components/Word';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attemptsLeft: 0,
      guesses: [],
      stats: { games: 0, won: 0 },
      status: { active: true, won: null },
      wordMask: [],
    };
  }

  componentDidMount() {
    startGame().then(game => this.updateState(game));

    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  updateState(game) {
    this.setState({
      attemptsLeft: 10 - game.errorCount,
      guesses: game.guesses,
      stats: { games: game.gamesPlayed, won: game.gamesWon },
      status: game.status,
      word: game.word,
      wordMask: game.wordMask
    });
  }

  handleKeyDown(e) {
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    if (e.keyCode >= 65 && e.keyCode <= 90) {
      guessLetter(e.key).then(game => this.updateState(game));
    }
  }

  handlePlayAgainPress() {
    startGame().then(game => this.updateState(game));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Game
          guesses={this.state.guesses}
          attemptsLeft={this.state.attemptsLeft}
          stats={this.state.stats}
        />
        <Word
          wordMask={this.state.wordMask}
        />

        <GameOverModel
          status={this.state.status}
          word={this.state.word}
          handlePlayAgainPress={this.handlePlayAgainPress.bind(this)}
        />
      </div>
    );
  }
}

export default App;
