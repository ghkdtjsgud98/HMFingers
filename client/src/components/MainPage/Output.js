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

<<<<<<< HEAD
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
=======
const menuList = {
  0: <Script />,
  1: <Summary />,
  2: <Translate />
>>>>>>> JW
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
          Script
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
