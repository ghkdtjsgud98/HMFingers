import styled from 'styled-components';
import { RiSettings3Line } from "react-icons/ri";


{/************************Output************************/}
export const OutputBox = styled.div`
  position: absolute;
  // width: 900px;
  // height: 650px;
  width : 62.5%;
  height : 72.2%;
  bottom : 32px;
  left : 30px;
  background-color: rgba(243, 243, 243, 1);
  border-radius: 30px;
  display : flex;
  flex-direction : column;
  justify-align : center;
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
  background : rgba(196, 196, 196, 1);  //tab 선택되면 rgba(243, 243, 243, 1) 로 색 변경
  border-radius: 30px 30px 0px 0px;
  // border-right :  1px solid rgba(196, 196, 196, 1);
  // border-left :  1px solid rgba(196, 196, 196, 1);
  text-align : center;
  padding : 10px;
  font-size : 30px;
  font-weight : bold;
  color : rgba(148, 148, 148, 1);   //tab 선택되면 rgba(0, 0, 0, 1) 로 변경되게
  cursor: pointer;
`;

export const ScriptWrapper = styled.div`
  position : relative;
  // width : 900px;
  // height : 595px;
  width : 62.5%;
  height : 91.5%;
  background : rgba(243, 243, 243, 1);
  border-radius: 0 0 30px 30px;
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


{/************************PlayBar************************/}
export const PlayBarBox = styled.div`
  position : absolute;
  // width : 900px;
  // height : 60px;
  width : 62.5%;
  height : 6.7%;
  left : 30px;
  top : 120px;
  border-radius: 10px;
  background : rgba(153, 153, 153, 1);
`;

{/************************KeywordSearch************************/}
export const KeywordSearchBox = styled.div`
  position: absolute;
  // width: 420px;
  // height: 60px;
  width : 29.2%;
  height : 6.7%;
  right: 30px;
  top: 120px;
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 10px;
`;
export const KeywordSearchInput = styled.input.attrs({
  placeholder: "Search"
})`
  border : none;
  background: none;
  width : 80%;
  height : 100%;
  margin-left : 10px;
  font-size : 30px;
`;
export const KeywordSearchSettingIcon = styled(RiSettings3Line)`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 6px;
  margin : 5px 0;
  cursor: pointer;
  color : rgba(196, 196, 196, 1);
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
`;
export const FileWrapper = styled.div`
  position : relaitve;
  height : 23px;
  margin : 20px 20px 0px 20px;
  font-size : 20px;
  font-weight : bold;

  cursor: pointer;
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
  font-size : 20px;
  font-weight : bold;
  text-align : center;
  cursor: pointer;
`;
