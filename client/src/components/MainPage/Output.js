import React, {useState} from 'react';
import {
  OutputBox,
  TabWrapper,
  TabElement,
  ContentsWrapper,
} from './StyledComponent';
import Script from './Script';
import Translate from './Translate';
import Summary from './Summary';

// props: getTime2, scriptId
const Output = (props) => {

  var [menu, setMenu] = useState(0);

  const getTime = (t) => {
    props.getTime(t);
  };

  const menuList = {
    0: <Script getTime={getTime} scriptId={props.scriptId}/>,
    1: <Summary scriptId={props.scriptId}/>,
    2: <Translate scriptId={props.scriptId}/>
  };

  return(
  <OutputBox>
    <TabWrapper>
      <TabElement 
        isActive={`${menu === 0? 'active': null}`} 
        onClick={() => setMenu(0)}
      >
        SCRIPT
      </TabElement>
      <TabElement
        isActive={`${menu === 1? 'active': null}`} 
        onClick={() => setMenu(1)}
      >
        SEARCH
      </TabElement>
      <TabElement
        isActive={`${menu === 2? 'active': null}`} 
        onClick={() => setMenu(2)}
      >
        TRANSLATE
      </TabElement>
    </TabWrapper>
    <ContentsWrapper
      isSummary={`${menu ===1? 'summary': null}`}
    >
      {menuList[menu]}
    </ContentsWrapper>
  </OutputBox>
  );

};


export default Output;