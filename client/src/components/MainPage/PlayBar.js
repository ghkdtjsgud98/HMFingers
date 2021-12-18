import React, {useContext } from 'react';
import {
  PlayBarBox,
} from './StyledComponent';
// import { Link } from 'react-router-dom';

const PlayBar = (currentTime2) => {

// console.log("PB-currentTime2 : ", currentTime2.currentTime2);

var obj = document.getElementById('audio');

if (obj !== null){
  obj.currentTime = currentTime2.currentTime2;
}

  return (
    <>

    <PlayBarBox>
      <audio id="audio" preload="metadata" style={{width : "100%", height : "100%", border : "none", borderRadius : "30px"}} controls loop>
        <source id="sndSrc" src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3" type="audio/mpeg" />
          {/* src에 상대경로로 파일 넣으면 왜 실행이 안되지? */}
      </audio>
    </PlayBarBox>

  </>
  );

};


export default PlayBar;