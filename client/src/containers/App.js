import React, { Component } from 'react';
import Header from '../components/Header';
import Game from '../components/Game';
import Word from '../components/Word';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      attemptsLeft: 0,
      stats: { games: 0, won: 0 },
      wordMask: ""
    };
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
      </div>
    );
  }
}

export default App;
