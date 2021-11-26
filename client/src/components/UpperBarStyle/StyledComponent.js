import styled from 'styled-components';
import { FiUpload } from "react-icons/fi"
import { BsPersonCircle } from "react-icons/bs"


{/************************UpperBar************************/}
export const UpperBarBox = styled.div`
  position : absolute;
  width : 100%;
  height : 80px;
  background : rgba(196, 196, 196, 1);
  display : flex;
  flex-direction : column;
  align-items : center;
`;
export const UpperBoxUploadIcon = styled(FiUpload)`
  position: fixed;
<<<<<<< HEAD
  width: 50px;
  height: 50px;
  right: 100px;
  top : 15px;
=======
  width: 40px;
  height: 40px;
  right: 90px;
  top : 20px;
>>>>>>> JW
  cursor: pointer;
`;
export const UpperBoxMeIcon = styled(BsPersonCircle)`
  position: fixed;
<<<<<<< HEAD
  width: 50px;
  height: 50px;
  right: 30px;
  top: 15px;
=======
  width: 40px;
  height: 40px;
  right: 30px;
  top: 20px;
>>>>>>> JW
  cursor: pointer;
`;
export const TitleWrapper = styled.div`
  position : absolute;
  top : 15px;
  font-size : 36px;
  font-weight : bold;
  cursor: pointer;
`;
export const SubTitleWrapper = styled.div`
  position : absolute;
<<<<<<< HEAD
  top : 50px;
  font-size : 12px;
  font-weight : 400;
=======
  top : 55px;
  font-size : 12px;
  font-weight : 500;
>>>>>>> JW
`;
