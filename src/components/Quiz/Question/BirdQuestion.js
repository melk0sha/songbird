import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import defaultImg from "./../../../assets/bird.jpg";

export default class BirdQuestion extends Component {
  render() {
    const { done, audioStopped } = this.props;
    const { image, name, audio } = this.props.bird;
    const pause = document.querySelector(".rhap_main-controls-button");

    return (
      <div className="question">
        <img className="question-image" src={done ? image : defaultImg} />
        <div className="question-title">
          <p className="bird-name">{done ? name : "*********"}</p>
          <div className="line"></div>
          <AudioPlayer
            src={audio}
            showVolumeControl={false}
            showLoopControl={false}
            showJumpControls={false}
            showDownloadProgress={false}
            autoPlayAfterSrcChange={false}
            onListen={() => {
              if (done && !audioStopped) {
                this.props.handleAudioStop();
                pause.click();
              }
            }}
          />
        </div>
      </div>
    );
  }
}
