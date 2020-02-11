import React, { Component } from "react";

export default class BirdQuestion extends Component {
  render() {
    return (
      <div className="question">
        <div className="question-image"></div>
        <div className="question-title">
          <p className="bird-name">*********</p>
          <div className="line"></div>
          <audio controls></audio>
        </div>
      </div>
    );
  }
}
