import React from 'react';
import InfoPaneTitle from './InfoPaneTitle';

const Stats = (props) => (
  <div className="stats infoPane">
    <InfoPaneTitle title={props.title}/>
    <div className="statsInfo ip-data">
      <div className="gamesPlayed">{"Games played: " + props.stats.games}</div>
      <div className="gamesWon">{"Games won: " + props.stats.won}</div>
    </div>
  </div>
);

export default Stats;
