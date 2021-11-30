import React from 'react';
import {
  PlayBarBox,

} from './StyledComponent';
// import { Link } from 'react-router-dom';

const PlayBar = () => {
  return (
    <>
    <PlayBarBox>
      <audio id="audio"  preload="metadata" style={{width : "100%", height : "100%", border : "none", borderRadius : "30px"}} controls loop>
        <source id="sndSrc" src="https://cf-media.sndcdn.com/324aF442RkRg.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMzI0YUY0NDJSa1JnLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjM4MjEwMTg0fX19XX0_&Signature=N3EzVirIr1~mWszw8waQKS8ELxaMqi0yE6Xlc~145RFmUAe~5Cr8jNCjyOqP2iUjv3GhZYlp0jhGZXBLp4DUI4w6aE81y-ikDKxewI5c~8ODqkoE8WE1MT5V97tjV9lXy6W~qo5XhYKRyYv7EZoUedRUDJ0FcIY-LDIxzGVgwR7u33~8LQulFpxJxBoLFtApCqMdCRVO3yQInpM45MfI1rSRZDYfzOB7bwi2PTE9ZQYPe6dciSFZms4aNHAuPTZvxSbtCK~cgViZkh-ZQ7jWrdoMEFmlc3fqX2SNNgJOGXxBoU07KIKNPlDk5bAdQVstnSEJYsYp7-1X5jWPeA8iQA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ" type="audio/mpeg" />
          {/* src에 상대경로로 파일 넣으면 왜 실행이 안되지? */}
        Your browser does not support the audio element.
      </audio>
    </PlayBarBox>
    </>
  );
};

export default PlayBar;
