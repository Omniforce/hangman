import React from 'react';
import InfoPaneTitle from './InfoPaneTitle';

const Attempts = (props) => (
  <div className="attempts infoPane">
    <InfoPaneTitle title={props.title}/>
    <div className="attemptsLeft ip-data">
      {10-props.errorCount}
    </div>
  </div>
);

export default Attempts;
