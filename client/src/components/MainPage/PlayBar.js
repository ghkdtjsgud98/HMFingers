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
    // console.log(audioUrl);
  },[props.scriptId]);

  var obj = document.getElementById('audio');

  // useEffect(()=>{
    if (obj !== null){
      // console.log(props.currentTime);
      obj.currentTime = props.currentTime;
      // console.log(obj.currentTime);
    }
  // },[props.currentTime]);

  // var obj2 = document.getElementById('sndSrc');

  // if(obj2 !== null){
  //   obj2.src = url;
  //   console.log(obj2.src);
  // }

  // console.log(props.scriptId);

  return (
    <>

    <PlayBarBox>
      <audio id="audio" src={audioUrl} preload="auto" style={{width : "100%", height : "100%", border : "none", borderRadius : "30px"}} controls loop>
        {/* <source id="sndSrc" src="http://3.35.26.8:3000/getAudio?script_id=8844&range=0-" type="audio/mpeg" /> */}
        {/* <source id="sndSrc" src={`http://3.35.26.8:3000/getAudio?script_id=${props.scriptId}&range=0-`} type="audio/mpeg" /> */}
        {/* <source id="sndSrc" src={audioUrl} type="audio/mpeg" /> */}
      </audio>

    </PlayBarBox>

  </>
  );

};


export default PlayBar;