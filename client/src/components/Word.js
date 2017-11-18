import React from 'react';

class Word extends React.Component {
  render() {
    const letters = this.props.wordMask.split('').map((letter, index) => {
      return <div key={index} className="letter">{letter}</div>
    });

    return (
      <div className="word">
        <div className="letters">{ letters }</div>
      </div>
    )
  }
}

export default Word;
