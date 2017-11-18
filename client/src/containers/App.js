import React, { Component } from 'react';
import Header from '../components/Header';
import Game from '../components/Game';
import Word from '../components/Word';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
        <Word />
      </div>
    );
  }
}

export default App;
