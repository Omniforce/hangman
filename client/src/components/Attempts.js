import React from 'react';
import InfoPaneTitle from './InfoPaneTitle';

const Attempts = (props) => (
  <div className="attempts">
    <InfoPaneTitle title={props.title}/>
    <div className="attemptsLeft ip-data">
      {props.attemptsLeft}
    </div>
  </div>
);

export default Attempts;
