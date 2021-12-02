import React, { useState } from 'react';
import UpperBar from '../components/commons/UpperBar';
import FileHandling from '../components/MainPage/FileHandling';
import KeywordSearch from '../components/MainPage/KeywordSearch';
import Output from '../components/MainPage/Output';
import PlayBar from '../components/MainPage/PlayBar';

const MainPage = () => {

  var [currentTime2, setCurrentTime2] = useState();

  const getTime2 = (t) => {
    setCurrentTime2(t);
    console.log("MP-getTime2 작동o");
  }

  console.log("MP-currentTime2 : ", currentTime2);

  return (
    <>
      <UpperBar />
      <Output getTime2={getTime2} />
      <PlayBar currentTime2={currentTime2} />
      <KeywordSearch />
      <FileHandling />
    </>
  );
};
export default MainPage;
