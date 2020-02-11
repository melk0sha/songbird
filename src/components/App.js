import React, { Component } from "react";
import Header from "./header/Header";
import BirdQuestion from "./question/BirdQuestion";
import BirdAnswers from "./answers/BirdAnswers";
import BirdOverview from "./overview/BirdOverview";
import NextLevel from "./nextLevel/NextLevel";
import birds from "./../data/birds";

export default class App extends Component {
  constructor() {
    super();

    const min = 0;
    const max = 5;
    const current = Math.floor(Math.random() * (max - min + 1)) + min;

    this.state = {
      finished: false,
      score: 0,
      point: 5,
      selected: 0,
      answerDone: false,
      currentBird: function() {
        return birds[this.state.selected][current];
      }
    };

    this.setScore = this.setScore.bind(this);
  }

  setScore() {
    const { score, point } = this.state;
    this.setState({ score: score + point });
  }

  render() {
    return (
      <div className="quiz">
        <Header score={this.state.score} selected={this.state.selected} />
        <BirdQuestion
          bird={this.state.currentBird()}
          selected={this.state.selected}
        />
        <div className="answers-overview-wrapper">
          <BirdAnswers birds={birds} selected={this.state.selected} />
          <BirdOverview
            bird={this.state.currentBird()}
            selected={this.state.selected}
            done={this.state.answerDone}
          />
        </div>
        <NextLevel
          finished={this.state.finished}
          selected={this.state.selected} // onclick
          done={this.state.answerDone}
        />
      </div>
    );
  }
}
