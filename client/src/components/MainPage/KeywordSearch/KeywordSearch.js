import React from 'react';
import {
  KeywordSearchBox,
  KeywordSearchInput,
} from '../StyledComponent';
// import { Link } from 'react-router-dom';
import KeywordSearchSettingButton from './KeywordSearchSettingButton';

const KeywordSearch = () => {
  return (
    <>
    <KeywordSearchBox>
      <KeywordSearchInput></KeywordSearchInput>
      <KeywordSearchSettingButton />
    </KeywordSearchBox>
    </>
  );
};

export default KeywordSearch;
