import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";

export default class BirdOverviewDone extends Component {
  render() {
    const { image, name, audio, species, description } = this.props.bird;
    return (
      <div className="bird-overview">
        <div className="bird-overview-wrapper">
          <img className="bird-overview-img" src={image} />
          <div className="bird-overview-header">
            <h2 className="bird-name">{name}</h2>
            <div className="line"></div>
            <p className="bird-type">{species}</p>
            <div className="line"></div>
            <AudioPlayer
              src={audio}
              showVolumeControl={false}
              showLoopControl={false}
              showJumpControls={false}
              showDownloadProgress={false}
              autoPlayAfterSrcChange={false}
            />
          </div>
        </div>
        <div className="description">{description}</div>
      </div>
    );
  }
}
