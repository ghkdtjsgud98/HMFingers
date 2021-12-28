import styled from 'styled-components';

export const LoginPageBox = styled.form`
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

export const LoginPageTextBox = styled.div`

`;

export const LoginPageMainText = styled.div`
  font-size: 16px;
`;

export const LoginPageSubText = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
`;

export const LoginPageEmailText = styled.div`
  font-size: 16px;
  margin-top: 40px;
  color : #8292a6;
`;

export const LoginPageEmailInput = styled.input`
  margin-top: 10px;
  width: 450px;
  height: 60px;
  border: 1px solid #8292a6;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const LoginPagePasswordText = styled.div`
  font-size: 16px;
  margin-top: 15px;
  color : #8292a6;
`;

export const LoginPagePasswordInput = styled.input`
  margin-top: 10px;
  width: 450px;
  height: 60px;
  border: 1px solid #8292a6;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const LoginPageLoginButton = styled.button`
  margin-top: 70px;
  width: 450px;
  height: 60px;
  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  font-size : 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const LoginPageRegisterButton = styled.button`
  margin-top: 20px;
  width: 450px;
  height: 60px;
  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  font-size : 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const LoginPageGoogleButton = styled.button`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
