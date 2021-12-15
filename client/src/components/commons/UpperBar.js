import React, { useEffect, useCallback, useState, Component } from 'react';
import { Link, useHistory, Route } from 'react-router-dom';
import {
  UpperBarBox,
  UpperBoxLogoutButton,
  LogoutIcon,
  TitleWrapper,
  SubTitle,
  Title,
} from './StyledComponent';
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

      <Link to='/Login'>
        <UpperBoxLogoutButton>
          <LogoutIcon />   
        </UpperBoxLogoutButton>
      </Link>
    </UpperBarBox>
    </>
  );
};

export default UpperBar;
