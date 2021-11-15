import React from "react";
import {
  UpperBarBox,
  UpperBoxUploadIcon,
  UpperBoxMeIcon,
  TitleWrapper,
  SubTitleWrapper,
} from '../UpperBarStyle/StyledComponent';

const UpperBar = () => {
  return(
    <>
    <UpperBarBox>
      <TitleWrapper>
        COSMOS
      </TitleWrapper>
      <SubTitleWrapper>
        Catch Our Sound Make Our Script
      </SubTitleWrapper>
      <UpperBoxUploadIcon />
      <UpperBoxMeIcon />
    </UpperBarBox>
    </>
  );
};

export default UpperBar;
