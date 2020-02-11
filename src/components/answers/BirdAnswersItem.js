import React, { Component } from "react";

export default class BirdAnswersItem extends Component {
  render() {
    return (
      <li className="answer">
        <span className="indicator"></span>
        {this.props.name}
      </li>
    );
  }
}
