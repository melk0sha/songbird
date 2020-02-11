import React, { Component } from "react";
import Score from "./Score";
import BirdIndicator from "./BirdIndicator";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="top-header">
          <div className="logo"></div>
          <Score score={this.props.score} />
        </div>
        <BirdIndicator selected={this.props.selected} />
      </header>
    );
  }
}
