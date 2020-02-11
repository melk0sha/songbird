import React, { Component } from "react";

export default class BirdIndicatorItem extends Component {
  render() {
    const classes = ["bird-type"];
    this.props.selected ? classes.push("selected") : null;

    return <li className={classes.join(" ")}>{this.props.type}</li>;
  }
}
