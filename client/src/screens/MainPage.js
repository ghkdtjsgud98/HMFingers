import React, { useState } from 'react';
import UpperBar from '../components/commons/UpperBar';
import FileHandling from '../components/MainPage/FileHandling';
import KeywordSearch from '../components/MainPage/KeywordSearch';
import Output from '../components/MainPage/Output';
import PlayBar from '../components/MainPage/PlayBar';

const MainPage = () => {

  return (
    <>
      <UpperBar />
      <PlayBar />
      <Output />
      <KeywordSearch />
      <FileHandling />
    </>
  );
};
export default MainPage;
