import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import img from "./../../../assets/bird.jpg";

export default class BirdQuestion extends Component {
  render() {
    return (
      <div className="question">
        <img
          className="question-image"
          src={this.props.done ? this.props.bird.image : img}
        />
        <div className="question-title">
          <p className="bird-name">
            {this.props.done ? this.props.bird.name : "*********"}
          </p>
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
    );
  }
}
