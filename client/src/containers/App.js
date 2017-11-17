import React, { Component } from 'react';
import Header from '../components/Header';
import GameInfo from '../components/GameInfo';
import Word from '../components/Word';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GameInfo />
        <Word />
      </div>
    );
  }
}

export default App;
