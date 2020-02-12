import React, { Component } from "react";
import BirdOverviewDone from "./BirdOverviewDone";
import BirdOverviewNotDone from "./BirdOverviewNotDone";

export default class BirdOverview extends Component {
  render() {
    const { done, bird } = this.props;

    return (
      <div className="overview">
        {!done ? <BirdOverviewNotDone /> : <BirdOverviewDone bird={bird} />}
      </div>
    );
  }
}
