import styled from 'styled-components';
import { RiSettings3Line } from "react-icons/ri";




import { FiUpload } from "react-icons/fi"
import { BsPersonCircle } from "react-icons/bs"
import { GoPrimitiveDot } from "react-icons/go"

import { BsDot } from "react-icons/bs"





{/************************Output************************/}
export const OutputBox = styled.div`
  position: absolute;
  // width: 900px;
  // height: 650px;
  width : 62.5%;
  height : 72.2%;
  //height: 65%; // playbar 수정중 임시로 적용
  bottom : 32px;
  left : 30px;
  background-color: rgba(243, 243, 243, 1);
  border-radius: 30px;
  display : flex;
  flex-direction : column;
  justify-align : center;
  z-index : 1;

`;
export const TabWrapper = styled.div`
  position : relative;
  // width : 900px;
  // height : 55px;
  width : 100%;
  height : 8.5%;
  background : rgba(196, 196, 196, 1);
  border-radius: 35px 35px 0px 0px;
  display : flex;
  flex-direction : row;
`;
export const TabElement = styled.div`
  position : relative;
  width : 33.333%;
  height : 100%;
  // background : rgba(196, 196, 196, 1);
  background : ${(props) => props.isActive === 'active' ? 'rgba(243, 243, 243, 1)':'rgba(196, 196, 196, 1)'};
  border-radius: 30px 30px 0px 0px;
  // border-right :  1px solid rgba(196, 196, 196, 1);
  // border-left :  1px solid rgba(196, 196, 196, 1);
  text-align : center;
  padding : 13px;
  font-size : 24px;
  font-weight : bold;
  color : ${(props) => props.isActive === 'active' ? 'rgba(0, 0, 0, 1)':'rgba(148, 148, 148, 1)'};
  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  height: 85%;
  position: relative;
  margin: 15px 15px 0 20px;
  font-size: 17px;
  line-height: 30px;
  overflow: ${(props) => props.isSummary === 'summary' ? 'none':'auto'};;
`;

export const ScriptWrapper = styled.div`

`;
export const ScriptCreator = styled.div`

`;
// export const SummaryWrapper = styled.div`
//   position : relative;
//   width : 900px;
//   height : 595px;
//   background : rgba(243, 243, 243, 1);
//   border-radius: 30px;
// `;
// export const TranslateWrapper = styled.div`
//   position : relative;
//   width : 900px;
//   height : 595px;
//   background : rgba(243, 243, 243, 1);
//   border-radius: 30px;
// `;

export const SummaryWrapper = styled.div`
  // height: 100%;
  overflow: auto; 
  width: 80%;
  margin-right : 5px;
`

export const SummaryWordsWrapper = styled.div`
  border-left: 1px solid #c4c4c4;
`;
export const SummaryWordsList = styled.div`
  margin-left : 5px;
  font-size : 20px;
  font-weight : bold;
  margin-top : 10px;
  display : flex;
`;
export const SummaryWordsIcon = styled(BsDot)`
  width: 36px;
  height: 36px;
  
  color : black;
`;


export const TranslateWrapper = styled.div`
position: absolute;
`;

export const LanguageButtonWrapper = styled.div`

position : relative;
margin-bottom : 5px;
width : 100%;
height : 30px;
display : flex;
flex-direction : row;
//justify-content: space-between;
`;

export const LanguageButton = styled.button`
position : relative;
width : 80px;
height : 30px;
margin-right : 15px;
//right : 20px;
//bottom : 10px;
font-size : 15px;
font-weight : bold;
cursor: pointer;
border : none;
border-radius : 15px;
background: rgba(196, 196, 196, 0.4);
`;





{/************************PlayBar************************/}
export const PlayBarBox = styled.div`
  position : absolute;
  // width : 900px;
  // height : 60px;
  width : 62.5%;
  height : 6%;
  left : 30px;
  top : 120px;
  //border-radius: 10px;
  //background : rgba(153, 153, 153, 1);

  z-index : 1;
`;

{/************************KeywordSearch************************/}
export const KeywordSearchBox = styled.div`
  position: absolute;
  // width: 420px;
  // height: 60px;
  width : 29.2%;
  height : 6%;
  right: 30px;
  top: 120px;
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 10px;

  z-index : 1;
`;
export const KeywordSearchInput = styled.input.attrs({
  placeholder: "Search"
})`
  border : none;
  background: none;
  width : 80%;
  height : 100%;
  margin-left : 10px;
  font-size : 20px;
`;
export const SearchSettingIcon = styled(RiSettings3Line)`
 
  width: 36px;
  height: 36px;
  
  color : rgba(196, 196, 196, 1);
`;

export const SearchSettingButton = styled.button`
  position : absolute;
  
  border : none;
  background : none;



  width: 36px;
  height: 36px;
  right: 10px;
  margin : 8px 0;
  cursor: pointer;
`;



{/************************SearchSettingModal************************/}

export const ModalBackground = styled.div`
    position: fixed;
    width : 100%;
    top : 80px;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.5);

    // z-index : 9999;
    
`;

export const KeywordSearchSettingModal = styled.div`
  position: fixed;
  width: 350px;
  height: 320px;
  top: 150px;
  right: 50px;
  background-color: white;
  
  box-sizing: border-box;
  border: 1px solid #999999;
  border-radius: 40px;
  background: white;       
  z-index : 9999;

  display : flex;
  flex-direction : column;
  align-items : center;
`;


export const ModalTitle = styled.div`
  position : relative;
  width : 100%;
  // height : px;
  top : 30px;
  font-size : 28px;
  font-weight : bold;
  display : flex;
  flex-direction : column;
  align-items : center;
`;

export const ModalCloseButton = styled.span`
  position : absolute;
  width : 20px;
  height : 40px;
  right : 20px;
  margin-bottom : 0px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;


export const ContentUploadButton = styled.button`
  position : absolute;
  width : 100px;
  height : 40px;

  // top: 20px;
  right : 20px;
  bottom : 10px;
  font-size : 18px;
  font-weight : bold;
  cursor: pointer;
  border : none;
  border-radius : 20px;
  background: rgba(196, 196, 196, 1);
  

`;

export const ModalContentsWrapper = styled.form`
  margin-top: 25px;
  width: 100%;
  height : 250px;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ModalContentsTitle = styled.div`
  position : relative;
  font-size: 16px;
  font-weight : bold;
  margin-top : 30px;
  left : 20px;
`;


export const KeywordSearchSettingCheckInput = styled.input`

`;


export const KeywordSearchSettingDateBox = styled.div`
  position : relative;
  width : 100%;
  height : 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top : 10px;

`;

export const KeywordSearchSettingDateSelect = styled.div`
  position : relative;
  //width: 100%;
  height : 25px;
  border: none;
  
  display : flex;
  //padding-left: 5px; 
  font-size : 18px;
  font-weight : bold;
  left : 70px;
  margin-top : 20px;
`;

export const KeywordSearchSettingDateInput = styled.input`
  position : absolute;
  height: 25px;
  width: 150px;
  right : 90px;
  border-bottom: 1px solid #000000;
  border-radius : 5px;
`;








{/************************FileHandling************************/}
export const FileHandlingBox = styled.div`
  position: absolute;
  // width: 420px;
  // height: 650px;
  width : 29.2%;
  height : 72.2%;
  right: 30px;
  bottom : 32px;
  background : rgba(243, 243, 243, 1);
  border-radius : 30px;

  display : flex;
  flex-direction : column;

  z-index : 0;
`;
export const FileWrapper = styled.div`
  position : relaitve;
  height : 23px;
  margin : 20px 20px 0px 20px;
  font-size : 20px;
  font-weight : bold;
  display : flex;

  cursor: pointer;
`;
export const FileSymbol = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: black;
  margin-top: 5px;
  margin-right: 10px;
`;
export const FileAllButton = styled.div`
  position : absolute;
  width: 54px;
  height: 44px;
  padding : 12px 0;
  background : rgba(196, 196, 196, 1);
  right : 12px;
  bottom : 12px;
  border-radius : 20px;
  text-size : 20px;
  weight : 400px;
  text-align : center;
  cursor: pointer;
`;
