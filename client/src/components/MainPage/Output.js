import React from 'react';
import {
  OutputBox,
  TabWrapper,
  TabElement,
  ScriptWrapper,

} from './StyledComponent';
// import { Link } from 'react-router-dom';

const Output = () => {

  return (
    <OutputBox>
      <TabWrapper>
        <TabElement>SCRIPT</TabElement>
        <TabElement>SUMMARY</TabElement>
        <TabElement>TRANSLATE</TabElement>
      </TabWrapper>
      <ScriptWrapper>
        //script
      </ScriptWrapper>
    </OutputBox>
  );
};

export default Output;
