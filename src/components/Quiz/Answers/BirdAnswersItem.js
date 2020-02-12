import React, { Component } from "react";
import correctAnswerSound from "./../../../assets/correctSound.wav";
import incorrectAnswerSound from "./../../../assets/incorrectSound.wav";

export default class BirdAnswersItem extends Component {
  constructor(props) {
    super(props);

    this.classes = new Set(["indicator"]);
    this.correctAnswerSound = this.getCorrectAnswerSound();
    this.handleClick = this.handleClick.bind(this);
  }

  getCorrectAnswerSound() {
    const correctSound = new Audio();
    const incorrectSound = new Audio();

    correctSound.preload = "auto";
    incorrectSound.preload = "auto";
    correctSound.src = correctAnswerSound;
    incorrectSound.src = incorrectAnswerSound;

    return {
      correctSound,
      incorrectSound
    };
  }

  handleClick({ target }) {
    const { correctSound, incorrectSound } = this.correctAnswerSound;

    if (!this.props.questionDone) {
      if (this.props.currentBird.id === +target.dataset.id) {
        this.classes.add("correct");
        correctSound.play();
      } else {
        this.classes.add("incorrect");
        incorrectSound.play();
      }
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
