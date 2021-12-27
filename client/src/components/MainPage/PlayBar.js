import axios from 'axios';
import React, {useContext } from 'react';
import { address } from '../../variables';
import {
  PlayBarBox,
} from './StyledComponent';
// import { Link } from 'react-router-dom';

// props: currentTime, scriptId
const PlayBar = (props) => {

  var obj = document.getElementById('audio');

  if (obj !== null){
    obj.currentTime = props.currentTime;
  }

  // console.log(props.scriptId);
  // var body = {"script_id": props.scriptId};

  // axios.get(`${address}/getAudio`, { params: body }).then((res) => {
  //   console.log(res);
  // });

  return (
    <>

    <PlayBarBox>
      <audio id="audio" preload="metadata" style={{width : "100%", height : "100%", border : "none", borderRadius : "30px"}} controls loop>
        {/* <source id="sndSrc" src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3" type="audio/mpeg" /> */}
        <source id="sndSrc" src="http://3.35.26.8:3000/getAudio?script_id=8051" type="audio/mpeg" />
      </audio>
    </PlayBarBox>

  </>
  );

};


export default PlayBar;