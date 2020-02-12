import React, { Component } from "react";
import BirdAnswersItem from "./BirdAnswersItem";

export default class BirdAnswers extends Component {
  render() {
    return (
      <ul className="answers">
        {this.props.birds[this.props.selected].map(bird => (
          <BirdAnswersItem
            key={bird.id}
            name={bird.name}
            onClick={this.props.onClick}
            id={bird.id}
            currentBird={this.props.currentBird}
            questionDone={this.props.questionDone}
            isNext={this.props.isNext}
            handleForNext={this.props.handleForNext}
          />
        ))}
      </ul>
    );
  }
}
