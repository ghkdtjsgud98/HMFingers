import styled from 'styled-components';
import { FiUpload } from "react-icons/fi"
import { BsPersonCircle } from "react-icons/bs"
import { GoPrimitiveDot } from "react-icons/go"
import { BiCalendar } from "react-icons/bi"




{/************************UpperBar************************/}

export const ModalBackground = styled.div`
    position: fixed;
    top: 80px;
    width : 100%;
    right: 0;
    bottom: 0;
    left: 0;
    //background: rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.5);

    z-index : 9999;
    
`;


export const UpperBarBox = styled.div`
  position : fixed;
  top : 0;
  width : 100%;
  height : 80px;
  background : rgba(196, 196, 196, 1);
  display : flex;
  flex-direction : column;
  align-items : center;

  z-index : 9999;
`;

export const UpperBoxUploadButton = styled.button`
  position : fixed;
  width:50px;
  height:50px;
  top : 15px;
  right : 100px;
  border : none;
  background : none;
  cursor: pointer;
`;

export const UpperBoxUploadIcon = styled(FiUpload)`
  width: 50px;
  height: 50px;
  color : #646464;
  
`;
export const UploadContentsDot = styled(GoPrimitiveDot)`
  width : 15px;
  height : 15px;
  margin-right : 5px;
`;


export const UpperBoxMeButton = styled.button`
  position : fixed;
  width:50px;
  height:50px;
  top : 15px;
  right : 30px;
  border : none;
  background : none;
  cursor: pointer;
`;

export const UpperBoxMeIcon = styled(BsPersonCircle)`
  width: 50px;
  height: 50px;
  color : #646464;
`;
export const TitleWrapper = styled.div`
  position : relative;
  width : 200px;
  top : 15px;
  cursor: pointer;
  color : #000000;
  display : flex;
  flex-direction : column;
  align-items : center;
`;
export const Title = styled.div`
  position : relative;
  font-size : 36px;
  font-weight : bold;
  color : #000000;
`;

export const SubTitle = styled.div`
  position : relative;
  //top : 50px;
  font-size : 12px;
  font-weight : 400;
  color : #000000;
`;


{/************************Upload************************/}
// UploadOptionModal, 
// ModalCloseButton, 
// ModalContentsWrapper,

export const UploadOptionModal = styled.div`
  position: fixed;
  width: 350px;
  height: 350px;
  top: 50px;
  right: 120px;
  float: right;
  background-color: white;
  
  box-sizing: border-box;
  border: 1px solid #999999;
  border-radius: 40px;
  background: white;       
  z-index : 9999;

  display : flex;
  flex-direction : column;
  //align-items : center;
`;

export const ModalTitle = styled.div`
  position : relative;
  width : 100%;
  height : 30px;
  top : 25px;
  font-size : 28px;
  font-weight : bold;
  display : flex;
  flex-direction : column;
  align-items : center;
`;

export const ModalCloseButton = styled.span`
  position : absolute;
  
  right : 15px;
  margin-bottom : 0px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export const ContentUploadButton = styled.button`
  position : absolute;
  width : 100px;
  height : 40px;

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
  width: 100%;
  height : 300px;
  position: absolute;
  margin-top : 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  left : 20px;
`;

export const ModalContentsTitle = styled.div`
  position : relative;
  font-size: 16px;
  font-weight : bold;
  margin-bottom : 10px;
`;



export const UploadOptionFileSelectBox = styled.div`
  position : relative;
  width : 100%;
  height : 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
 
`;

export const UploadOptionContentCheckBox = styled.div`
  position : relative;
  
  width : 100%;
  height : 18px;
  display: flex;
  margin-bottom : 10px;
`;

export const UploadOptionCheckInput = styled.input`

`;

export const UploadOptionFileSelect = styled.div`
  margin-left: 5px;
`;

export const UploadOptionFileInput = styled.input`

`;


export const UploadOptionNicknameBox = styled.div`
  position : relative;
  width : 100%;
  height : 60px;
  top : 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;

`;

export const UploadOptionNicknameInput = styled.input.attrs({
    placeholder: "input your file nickname"
})`
    position : relative;
    width: 200px;
    height : 25px;
    border: none;
    border-bottom: 1px solid #000000;
    font-size : 15px;
    padding-left: 5px;
  `;


export const UploadOptionDateBox = styled.div`
  position : relative;
  width : 100%;
  height : 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top : 40px;
`;


export const UploadOptionDateSelect = styled.div`
  position : relative;
  width: 200px;
  height : 25px;
  border: none;
  border-bottom: 1px solid #000000;
  display : flex;
  padding-left: 5px; 
`;

export const UploadOptionDateInput = styled.input`
  height: 20px;
  width: 170px;
`;

export const DateText = styled.div`
  position : relative;
  width: 200px;
  height : 25px;
  font-size : 18px;
  cursor: pointer;
  left : 30px;
  color : rgba(196, 196, 196, 1);
  
  background : pink;    //임시지정

`;

// export const DateIcon = styled(BiCalendar)`
//   position : absolute;
//   width: 20px;
//   height: 20px;
// `;
