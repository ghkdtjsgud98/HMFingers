import React, {Component} from 'react';
import {
  OutputBox,
  TabWrapper,
  TabElement,
  ScriptWrapper,

} from './StyledComponent';
import Script from './Script';
import Translate from './Translate';
import Summary from './Summary';
// import { Link } from 'react-router-dom';

const menuList = {
  0: <Script />,
  1: <Summary />,
  2: <Translate />
};

class Output extends React.Component{
  constructor(props){
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) =>{
    this.setState({menu: menuIndex});
  }

  render(){
    return(
    <OutputBox>
      <TabWrapper>
        <TabElement 
        isActive={`${this.state.menu === 0? 'active': null}`} 
        onClick={() => this.changeMenu(0)}
        >
          SCRIPT
        </TabElement>
        <TabElement
        isActive={`${this.state.menu === 1? 'active': null}`} 
        onClick={() => this.changeMenu(1)}
        >
          SUMMARY
        </TabElement>
        <TabElement
        isActive={`${this.state.menu === 2? 'active': null}`} 
        onClick={() => this.changeMenu(2)}
        >
          TRANSLATE
        </TabElement>
      </TabWrapper>
      <ScriptWrapper>
        {menuList[this.state.menu]}
      </ScriptWrapper>
    </OutputBox>
    )
  }
}


export default Output;
