import React, { Component } from "react";

export default class NextLevel extends Component {
  render() {
    const classes = ["next-level"];
    this.props.done ? classes.push("done") : null;

    return (
      <button className={classes.join(" ")} onClick={this.props.onClick}>
        Следующий уровень
      </button>
    );
  }
}
