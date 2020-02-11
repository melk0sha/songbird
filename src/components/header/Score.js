import React, { Component } from "react";

export default class Score extends Component {
  render() {
    return <p className="score">Score: {this.props.score}</p>;
  }
}
