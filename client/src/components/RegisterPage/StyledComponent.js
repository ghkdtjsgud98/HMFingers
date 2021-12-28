import styled from 'styled-components';

export const RegisterPageBox = styled.form`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width : 100%;
  top : 15px;
  cursor: pointer;
  color : #000000;
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-bottom : 70px;
`;

export const Title = styled.div`
  position : relative;
  font-size : 60px;
  font-weight : bold;
  color : #000000;
`;

export const SubTitle = styled.div`
  position : relative;
  font-size : 20px;
  color : #000000;
`;

export const RegisterPageTextBox = styled.div``;

export const RegisterPageMainText = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: -25px;
`;

export const RegisterPageEmailText = styled.div`
  font-size: 16px;
  margin-top: 20px;
  color : #8292a6;
`;

export const RegisterPageEmailInput = styled.input`
  margin-top: 15px;
  width: 450px;
  height: 60px;
  border: 1px solid #8292a6;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const RegisterPageUsernameText = styled.div`
  font-size: 16px;
  margin-top: 50px;
  color : #8292a6;
`;

export const RegisterPageUsernameInput = styled.input`
  margin-top: 15px;
  width: 450px;
  height: 60px;
  border: 1px solid #8292a6;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const RegisterPagePasswordCreateText = styled.div`
  font-size: 16px;
  margin-top: 20px;
  color : #8292a6;
`;

export const RegisterPagePasswordCreateInput = styled.input`
  margin-top: 15px;
  width: 450px;
  height: 60px;
  border: 1px solid #8292a6;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const RegisterPagePasswordRepeatText = styled.div`
  font-size: 16px;
  margin-top: 20px;
  color : #8292a6;
`;

export const RegisterPagePasswordRepeatInput = styled.input`
  margin-top: 15px;
  width: 450px;
  height: 60px;
  border: 1px solid #8292a6;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const RegisterPageRegisterButton = styled.button`
  margin-top: 60px;
  width: 450px;
  height: 60px;
  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size : 20px;
`;
