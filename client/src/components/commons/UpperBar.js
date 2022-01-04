import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to='/'>
        <UpperBoxLogoutButton>
          <LogoutIcon />   
        </UpperBoxLogoutButton>
      </Link>
    </UpperBarBox>
    </>
  );
};

export default UpperBar;
