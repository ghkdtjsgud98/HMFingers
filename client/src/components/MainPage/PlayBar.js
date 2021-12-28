import React, {useState} from 'react';
import { useEffect } from 'react';
import {
  PlayBarBox,
} from './StyledComponent';

// props: currentTime, scriptId
const PlayBar = (props) => {

  const [audioUrl, setAudioUrl] = useState("");

  useEffect(() => {
    setAudioUrl(`http://3.35.26.8:3000/getAudio?script_id=${props.scriptId}&range=0-`);
  },[props.scriptId]);

  var obj = document.getElementById('audio');

  if (obj !== null){
    obj.currentTime = props.currentTime;
  }

  return (
    <>
    <PlayBarBox>
      <audio id="audio" src={audioUrl} preload="auto" style={{width : "100%", height : "100%", border : "none", borderRadius : "30px"}} controls loop>
      </audio>
    </PlayBarBox>

  </>
  );

};

export default PlayBar;