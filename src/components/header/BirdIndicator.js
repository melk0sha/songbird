import React, { Component } from "react";
import BirdIndicatorItem from "./BirdIndicatorItem";

export default class BirdIndicator extends Component {
  render() {
    const types = [
      "Разминка",
      "Воробьиные",
      "Лесные птицы",
      "Певчие птицы",
      "Хищные птицы",
      "Морские птицы"
    ];

    return (
      <ul className="bottom-header">
        {types.map((type, idx) =>
          this.props.selected === idx ? (
            <BirdIndicatorItem key={idx} type={type} selected={true} />
          ) : (
            <BirdIndicatorItem key={idx} type={type} selected={false} />
          )
        )}
      </ul>
    );
  }
}
