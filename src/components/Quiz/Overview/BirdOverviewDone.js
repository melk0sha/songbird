import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";

export default class BirdOverviewDone extends Component {
  render() {
    return (
      <div className="bird-overview">
        <div className="bird-overview-wrapper">
          <img className="bird-overview-img" src={this.props.bird.image} />
          <div className="bird-overview-header">
            <h2 className="bird-name">{this.props.bird.name}</h2>
            <div className="line"></div>
            <p className="bird-type">{this.props.bird.species}</p>
            <div className="line"></div>
            <AudioPlayer
              src={this.props.bird.audio}
              showVolumeControl={false}
              showLoopControl={false}
              showJumpControls={false}
              showDownloadProgress={false}
              autoPlayAfterSrcChange={false}
            />
          </div>
        </div>
        <div className="description">{this.props.bird.description}</div>
      </div>
    );
  }
}
