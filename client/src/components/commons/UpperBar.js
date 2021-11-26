import React, { useEffect, useCallback, useState, Component } from 'react';
import { Link, useHistory, Route } from 'react-router-dom';
import {
  UpperBarBox,
  UpperBoxUploadButton,
  UpperBoxUploadIcon,
  UpperBoxMeButton,
  UpperBoxMeIcon,
  TitleWrapper,
  SubTitle,
  Title,
} from '../UpperBarStyle/StyledComponent';
import UploadOptionButton from './UploadOptionButton';

const UpperBar = () => {
  return(
    <>
    <UpperBarBox>
      <Link to='/main'>
        <TitleWrapper>
          <Title>COSMOS</Title>
          <SubTitle>Catch Our Sound Make Our Script</SubTitle>
        </TitleWrapper>
      </Link>
      <UploadOptionButton/>


      <UpperBoxMeButton>
        <UpperBoxMeIcon />
      </UpperBoxMeButton>
    </UpperBarBox>
    </>
  );
};

export default UpperBar;
