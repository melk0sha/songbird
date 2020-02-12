import React, { Component } from "react";

export default class BirdAnswersItem extends Component {
  constructor(props) {
    super(props);

    this.classes = new Set(["indicator"]);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    if (!this.props.questionDone) {
      this.props.currentBird.id === +target.dataset.id
        ? this.classes.add("correct")
        : this.classes.add("incorrect");
    }

    this.props.onClick(target);
  }

  componentDidUpdate() {
    if (this.props.isNext) {
      this.classes = new Set(["indicator"]);
      this.props.handleForNext();
    }
  }

  render() {
    return (
      <li className="answer" onClick={this.handleClick} data-id={this.props.id}>
        <span className={[...this.classes].join(" ")}></span>
        {this.props.name}
      </li>
    );
  }
}
