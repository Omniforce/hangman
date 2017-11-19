import React from 'react';

class GameOverModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: {}, word: '' };

    this.handlePlayAgainPress = props.handlePlayAgainPress;
  }

  componentDidMount() {
    this.setState({ status: this.props.status, word: this.props.word });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ status: newProps.status, word: newProps.word });
  }

  render() {
    if(this.state.status.active) return null;

    const message = this.state.status.won ? "Congratulations! You won!" : "Game over! The word was:\n" + this.state.word

    return (
      <div className="modalBackdrop">
        <div className="modal">
          <div className="modalInfo">
            {message}
            <div className="modalFooter">
              <button onClick={() => this.handlePlayAgainPress()}>Play again</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameOverModel;
