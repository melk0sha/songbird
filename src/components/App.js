import React, { Component } from "react";
import Header from "./Header/Header";
import Quiz from "./Quiz/Quiz";
import Finish from "./Finish/Finish";
import getCurrentNumberOfBird from "./Utils/getNumberOfBird";
import birds from "./../data/birds";

export default class App extends Component {
  constructor() {
    super();

    this.minPointOfBirdCount = 0;
    this.maxPointOfBirdCount = 5;
    const current = getCurrentNumberOfBird(
      this.minPointOfBirdCount,
      this.maxPointOfBirdCount
    );

    this.state = {
      finished: false,
      score: 0,
      point: 5,
      selected: 0,
      answerDone: false,
      questionDone: false,
      isNext: false,
      answer: 0,
      currentBird: function() {
        return birds[this.selected][current];
      }
    };

    this.setScore = this.setScore.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleNextLevel = this.handleNextLevel.bind(this);
    this.handleForNext = this.handleForNext.bind(this);
    this.handleFinished = this.handleFinished.bind(this);
  }

  setScore() {
    const { score, point } = this.state;
    const updatePoint = 5;

    this.setState({ score: score + point });

    return updatePoint;
  }

  handleAnswer(li) {
    if (this.state.questionDone) {
      this.setState({
        answer: li.dataset.id - 1
      });

      return;
    }

    const questionDone =
      this.state.currentBird().id === +li.dataset.id ? true : false;
    let { point } = this.state;

    if (!li.children[0].classList.contains("incorrect") && !questionDone) {
      point = point - 1;
    }

    if (questionDone) {
      point = this.setScore();
    }

    this.setState({
      answer: li.dataset.id - 1,
      point,
      answerDone: true,
      questionDone
    });
  }

  handleNextLevel() {
    const current = getCurrentNumberOfBird(
      this.minPointOfBirdCount,
      this.maxPointOfBirdCount
    );
    let { selected, questionDone } = this.state;

    if (!questionDone) {
      return;
    }

    if (selected === 5) {
      this.setState({ finished: true });
      return;
    } else {
      selected = selected + 1;
    }

    this.setState({
      selected,
      answerDone: false,
      questionDone: false,
      answer: 0,
      isNext: true,
      currentBird: function() {
        return birds[selected][current];
      }
    });
  }

  handleForNext() {
    this.setState({ isNext: false });
  }

  handleFinished() {
    const current = getCurrentNumberOfBird(
      this.minPointOfBirdCount,
      this.maxPointOfBirdCount
    );
    const selected = 0;

    this.setState({
      finished: false,
      score: 0,
      point: 5,
      selected,
      answerDone: false,
      questionDone: false,
      answer: 0,
      currentBird: function() {
        return birds[selected][current];
      }
    });
  }

  render() {
    const { score, selected, finished } = this.state;

    return (
      <div className="quiz">
        <Header score={score} selected={selected} />
        {finished ? (
          <Finish score={score} handleFinished={this.handleFinished} />
        ) : (
          <Quiz
            quiz={this.state}
            birds={birds}
            handleAnswer={this.handleAnswer}
            handleForNext={this.handleForNext}
            handleNextLevel={this.handleNextLevel}
          />
        )}
      </div>
    );
  }
}
