import React, { Component } from "react";
import BirdQuestion from "./Question/BirdQuestion";
import BirdAnswers from "./Answers/BirdAnswers";
import BirdOverview from "./Overview/BirdOverview";
import NextLevel from "./NextLevel/NextLevel";

export default class Quiz extends Component {
  render() {
    const {
      currentBird,
      questionDone,
      selected,
      isNext,
      answer,
      answerDone,
      finished
    } = this.props.quiz;
    const { birds, handleAnswer, handleForNext, handleNextLevel } = this.props;

    return (
      <div className="main-quiz">
        <BirdQuestion
          bird={currentBird.call(this.props.quiz)}
          done={questionDone}
        />
        <div className="answers-overview-wrapper">
          <BirdAnswers
            birds={birds}
            currentBird={currentBird.call(this.props.quiz)}
            selected={selected}
            onClick={handleAnswer}
            questionDone={questionDone}
            isNext={isNext}
            handleForNext={handleForNext}
          />
          <BirdOverview bird={birds[selected][answer]} done={answerDone} />
        </div>
        <NextLevel
          finished={finished}
          done={questionDone}
          onClick={handleNextLevel}
        />
      </div>
    );
  }
}
