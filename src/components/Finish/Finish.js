import React, { Component } from "react";
import FinishAgainBtn from "./FinishAgainBtn";
import congratsImg from "../../assets/congrats.jpg";

export default class Finish extends Component {
  render() {
    const { score, handleFinished } = this.props;
    const maxScore = 30;

    return (
      <div className="finish-score">
        {score === maxScore ? (
          <img className="finish-img" src={congratsImg} />
        ) : null}
        <h2 className="congrats">Поздравляем!</h2>
        <p className="congrats-text">
          Вы прошли викторину и набрали
          {score === maxScore
            ? " максимальное количество баллов (30/30)! Круто!"
            : ` ${score} баллов из ${maxScore} возможных`}
        </p>
        <div className="line"></div>
        <FinishAgainBtn handleFinished={handleFinished} />
      </div>
    );
  }
}
