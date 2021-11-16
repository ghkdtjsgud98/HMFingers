import React from 'react';
import {
  KeywordSearchBox,
  KeywordSearchSettingIcon,
  KeywordSearchInput,
} from './StyledComponent';
// import { Link } from 'react-router-dom';

const KeywordSearch = () => {
  return (
    <>
    <KeywordSearchBox>
      <KeywordSearchInput></KeywordSearchInput>
      <KeywordSearchSettingIcon></KeywordSearchSettingIcon>
    </KeywordSearchBox>
    </>
  );
};

export default KeywordSearch;
