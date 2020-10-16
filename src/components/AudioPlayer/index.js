import React, { useState, useRef } from "react";
import ReactInputSlider from "react-input-slider";
import { withTheme } from "styled-components";

import AudioPlayer from "./AudioPlayer";
import { reactInputSlider, reactVolumeSlider } from "./AudioSlider";
import { parseToMinutes } from "../../utils/parseToMinutes";

function AudioPlayerComponent(props) {
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const audioRef = useRef(null);
  const handleLoadedData = () => {
    console.log(audioRef);
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  const changeMuted = () => {
    audioRef.current.muted=!muted;
    setMuted(!muted);
  }

  return (
    <AudioPlayer>
      <div className="audio-player">
        <i className="fas fa-step-backward"></i>
        {isPlay ? (
          <i className="fas fa-pause" onClick={handlePausePlayClick}></i>
        ) : (
          <i className="fas fa-play" onClick={handlePausePlayClick}></i>
        )}

        <i className="fas fa-step-forward"></i>
      </div>
      <div className="audio-content">
        <div className="audio-content__volume">
          {muted ? (
            <i className="fas fa-volume-mute" onClick={changeMuted} ></i>
          ) : (
            <i className="fas fa-volume-down" onClick={changeMuted} ></i>
          )}
          <div className="audio-content__slider">
            {/* <ReactInputSlider
            ystep={1}
            axis="y"
            ymax={duration}
            x={currentTime}
            onChange={handleTimeSliderChange}
            styles={reactVolumeSlider(props.theme.color)}
          /> */}
          </div>
        </div>
        <div className="audio-content__img">
          <img
            src="https://allaroundnewmusic.com/wp-content/uploads/2016/05/zak.jpg"
            alt=""
          />
          <div className="audio-content__title">
            <h2> zak abel </h2>
            <h3> Love song </h3>
          </div>
        </div>
      </div>
      <div className="audio-time">
        <h3> {parseToMinutes(currentTime)} </h3>
        <div className="audio-time__slider">
          <ReactInputSlider
            xstep={1}
            axis="x"
            xmax={duration}
            x={currentTime}
            onChange={handleTimeSliderChange}
            styles={reactInputSlider(props.theme.color)}
          />
        </div>
        <h3> {parseToMinutes(duration - currentTime)} </h3>
      </div>

      <audio
        controls
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/new.mp3"}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setPlay(false)}
      />
    </AudioPlayer>
  );
}

export default withTheme(AudioPlayerComponent);
