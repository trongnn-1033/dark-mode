import React, { useState, useRef } from "react";
import ReactInputSlider from "react-input-slider";
import Slider, { createSliderWithTooltip }from 'rc-slider';
import { withTheme } from "styled-components";

import AudioPlayer from "./AudioPlayer";
import { reactInputSlider, reactVolumeSlider } from "./AudioSlider";
import { parseToMinutes } from "../../utils/parseToMinutes";



function AudioPlayerComponent(props) {
  const [muted, setMuted] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const audioRef = useRef(null);
  const handleLoadedData = () => {
    console.log(audioRef);
    setCurrentVolume(audioRef.current.volume);
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

  const handleChangeVolume = ( x ) => {
    audioRef.current.volume = x;
    setCurrentVolume(x);
    if(x === 0) { 
      setMuted(true);
    }else{
      setMuted(false);
    }
  }

  const handleTimeSliderChange = (x ) => {
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
            <Slider
              {...reactVolumeSlider(props.theme.color)}
              vertical
              max={1}
              value={currentVolume}
              step={0.1}
              onChange={handleChangeVolume}
            />
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
          <Slider
            {...reactInputSlider(props.theme.color)}
            max={duration}
            value={currentTime}
            onChange={handleTimeSliderChange}
          />
        </div>
        <h3> {parseToMinutes(duration - currentTime)} </h3>
      </div>

      <audio
        controls
        ref={audioRef}
        src={"https://vnso-zn-16-tf-mp3-s1-zmp3.zadn.vn/643d225375149c4ac505/131587094601896558?authen=exp=1603250613~acl=/643d225375149c4ac505/*~hmac=3076b39766bd4c37a6c19efcf8e082ad"}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setPlay(false)}
      />
    </AudioPlayer>
  );
}

export default withTheme(AudioPlayerComponent);
