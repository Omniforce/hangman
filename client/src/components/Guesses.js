import React from 'react';
import InfoPaneTitle from './InfoPaneTitle';

const Guesses = (props) => (
  <div className="guesses">
    <InfoPaneTitle title={props.title}/>
    <div className="guessedLetters ip-data">
      {props.guesses.join(' ')}
    </div>
  </div>
);

export default Guesses;
