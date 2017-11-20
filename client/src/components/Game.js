import React from 'react';

import Gallows from './Gallows';
import Guesses from './Guesses';
import Attempts from './Attempts';
import Stats from './Stats';

const Game = (props) => (
  <div className="game">
    <Gallows
      errorCount={props.errorCount}
    />
    <div className="gameInfo">
      <Guesses
        title="Guesses"
        guesses={props.guesses}
      />
      <Attempts
        title="Attempts Left"
        errorCount={props.errorCount}
      />
      <Stats
        title="Stats"
        stats={props.stats}
      />
    </div>
  </div>
)

export default Game;
