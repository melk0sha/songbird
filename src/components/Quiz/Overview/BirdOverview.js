import React, { Component } from "react";
import BirdOverviewDone from "./BirdOverviewDone";
import BirdOverviewNotDone from "./BirdOverviewNotDone";

export default class BirdOverview extends Component {
  render() {
    return (
      <div className="overview">
        {!this.props.done ? (
          <BirdOverviewNotDone />
        ) : (
          <BirdOverviewDone bird={this.props.bird} />
        )}
      </div>
    );
  }
}
