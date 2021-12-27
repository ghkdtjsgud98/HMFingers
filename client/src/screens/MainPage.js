import React, { useState } from 'react';
import UpperBar from '../components/commons/UpperBar';
import FileHandling from '../components/MainPage/FileHandling';
import KeywordSearch from '../components/MainPage/KeywordSearch/KeywordSearch';
import Output from '../components/MainPage/Output';
import PlayBar from '../components/MainPage/PlayBar';

const MainPage = () => {

  var [currentTime, setCurrentTime] = useState(0);
  var [scriptId, setScriptId] = useState();

  const getTime = (t) => {
    setCurrentTime(t);
  }

  const getScriptId = (scriptId) => {
    setScriptId(scriptId);
  }

  // console.log("mp", currentTime);
  // console.log("mp", scriptId);

  return (
    <>
      <UpperBar />
      <Output getTime={getTime} scriptId={scriptId} />
      <PlayBar currentTime={currentTime} scriptId={scriptId}/>
      <KeywordSearch />
      <FileHandling getScriptId={getScriptId} />
    </>
  );
};
export default MainPage;
