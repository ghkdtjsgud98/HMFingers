import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { address } from '../../variables';
import {
  LoginPageBox,
  TitleWrapper,
  Title,
  SubTitle,
  LoginPageEmailInput,
  LoginPageEmailText,
  LoginPageLoginButton,
  LoginPageMainText,
  LoginPagePasswordInput,
  LoginPagePasswordText,
  LoginPageRegisterButton,
  LoginPageSubText,
  LoginPageTextBox,
} from './StyledComponent';

const LoginComponent = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let body = {
      id: email,
      psword: password,
    };

    await axios.post(`${address}/login`, body).then((res) => {
      localStorage.setItem('user_pk', res.data.user_pk);
      if (res.status === 200) navigate('/main');
    });
  };

  return (
    <>
      <LoginPageBox onSubmit={submitHandler}>
        <Link to='/'>
          <TitleWrapper>
            <Title>COSMOS</Title>
            <SubTitle>Catch Our Sound Make Our Script</SubTitle>
          </TitleWrapper>
        </Link>
        <LoginPageTextBox>
          <LoginPageMainText>Welcome Back</LoginPageMainText>
          <LoginPageSubText>Login to your account</LoginPageSubText>
          <LoginPageEmailText>Email</LoginPageEmailText>
          <LoginPageEmailInput
            type='email'
            value={email}
            name='email'
            placeholder='Email'
            onChange={emailHandler}
            required
          />
          <LoginPagePasswordText>Password</LoginPagePasswordText>
          <LoginPagePasswordInput
            type='password'
            value={password}
            name='password'
            placeholder='Password'
            onChange={passwordHandler}
            required
          />
        </LoginPageTextBox>
        <LoginPageLoginButton type='submit'>Login now</LoginPageLoginButton>
        <Link to='/register'>
          <LoginPageRegisterButton>Register now</LoginPageRegisterButton>
        </Link>
      </LoginPageBox>
    </>
  );
};

export default LoginComponent;
