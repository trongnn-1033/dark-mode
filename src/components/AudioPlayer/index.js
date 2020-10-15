import React, { useState, useRef } from 'react'
import ReactAudioPlayer from 'react-audio-player';

import AudioPlayer from './AudioPlayer';

function AudioPlayerComponent(props) {
  const [mute, setMute] = useState(false);
  const audioRef = useRef(null);
  const onPause = () => {
    const audio = audioRef.current;
    console.log(audioRef);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    setMute(!mute);
  }
  return (
    <AudioPlayer>
      <audio controls ref={audioRef}>
          <source src={process.env.PUBLIC_URL + "/new.mp3"}/>
        </audio>
      <button onClick={onPause} >
        pause
      </button>
    </AudioPlayer>
  )
}

export default AudioPlayerComponent;
