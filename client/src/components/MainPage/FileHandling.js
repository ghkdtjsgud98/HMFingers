import React from 'react';
import {
  FileHandlingBox,
  FileWrapper,
  FileAllButton,

} from './StyledComponent';
// import { Link } from 'react-router-dom';

const FileHandling = () => {
  return (
    <>
    <FileHandlingBox>
      <FileWrapper>File1</FileWrapper>
      <FileWrapper>File2</FileWrapper>
      <FileWrapper>File3</FileWrapper>
      <FileAllButton>ALL</FileAllButton>
    </FileHandlingBox>
    </>
  );
};

export default FileHandling;
