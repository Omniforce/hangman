import React from 'react';

import Gallows from './Gallows';
import Guesses from './Guesses';
import Attempts from './Attempts';
import Stats from './Stats';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guessed: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
      attemptsLeft: 10,
      stats: { games: 3, won: 2 }
    };
  }

  render() {
    return (
      <div className="game">
        <Gallows />
        <div className="gameInfo">
          <Guesses
            title="Guesses"
            guessed={this.state.guessed}
          />
          <Attempts
            title="Attempts Left"
            attemptsLeft={this.state.attemptsLeft}
          />
          <Stats
            title="Stats"
            stats={this.state.stats}
          />
        </div>
      </div>
    );
  }
}

export default Game;
