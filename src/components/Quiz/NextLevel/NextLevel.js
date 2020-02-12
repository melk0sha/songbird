import React, { Component } from "react";

export default class NextLevel extends Component {
  render() {
    const { done } = this.props;
    const classes = ["next-level"];
    done ? classes.push("done") : null;

    return (
      <button className={classes.join(" ")} onClick={this.props.onClick}>
        Следующий уровень
      </button>
    );
  }
}
