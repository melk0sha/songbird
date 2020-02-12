import React, { Component } from "react";

export default class FinishAgainBtn extends Component {
  render() {
    const { handleFinished } = this.props;

    return (
      <button className="play-again" onClick={handleFinished}>
        Сыграть еще раз!
      </button>
    );
  }
}
