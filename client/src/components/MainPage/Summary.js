import React, { Component } from "react";
import {SummaryWrapper, SummaryContentsWrapper, SummaryWordsWrapper} from './StyledComponent';

class Summary extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
          <>
            <SummaryWrapper>
              zz
              {/* <SummaryContentsWrapper>temp</SummaryContentsWrapper>
              <SummaryWordsWrapper>temp</SummaryWordsWrapper> */}
            </SummaryWrapper>
          </>
        )
    }
  }
  
  
  export default Summary;