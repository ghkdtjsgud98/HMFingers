import React, { useState } from 'react';
import UpperBar from '../components/commons/UpperBar';
import FileHandling from '../components/MainPage/FileHandling';
import KeywordSearch from '../components/MainPage/KeywordSearch';
import Output from '../components/MainPage/Output';
import PlayBar from '../components/MainPage/PlayBar';

const MainPage = () => {

  const [currentTime2, setCurrentTime2] = useState();

  const getTime2 = (t) => {
    setCurrentTime2(t);
  }

  return (
    <>
      <UpperBar />
      <PlayBar currentTime2={currentTime2} />
      <Output getTime2={getTime2} />
      <KeywordSearch />
      <FileHandling />
    </>
  );
};
export default MainPage;
