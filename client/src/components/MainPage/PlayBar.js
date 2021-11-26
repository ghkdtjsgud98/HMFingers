import React from 'react';
import {
  PlayBarBox,

} from './StyledComponent';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import { Link } from 'react-router-dom';

const PlayBar = () => {
  return (
    <>
    <PlayBarBox>
      <AudioPlayer
        autoPlay='false'
        src="http://example.com/audio.mp3"
        onPlay={e => console.log("onPlay")}
        volume='1.0'
      />
    </PlayBarBox>
    </>
  );
};

export default PlayBar;
