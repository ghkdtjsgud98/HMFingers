import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { address } from '../../variables';
import {
  LoginPageBox,
  LoginPageLogo,
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
// import { useCookies } from 'react-cookie';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  // const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);
  const navigate = useNavigate();

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  // useEffect(() => {
  //   if (cookies.rememberEmail !== undefined) {
  //     setEmail(cookies.rememberEmail);
  //     setIsRemember(true);
  //   }
  // }, [cookies.rememberEmail]);

  // const rememberHandler = (e) => {
  //   setIsRemember(e.target.checked);
  //   if (e.target.checked) {
  //     setCookie('rememberEmail', email, { maxAge: 2000 });
  //   } else {
  //     removeCookie('rememberEmail');
  //   }
  // };

  const submitHandler = async (e) => {
    e.preventDefault();

    let body = {
      id: email,
      psword: password,
    };

    await axios.post(`${address}/login`, body).then((res) => {
      const accessToken = 'Bearer ' + res.data.accessToken;
      axios.defaults.headers.common['Authorization'] = accessToken;
      localStorage.setItem('Authorization', accessToken);

      console.log(res.status);
      
      if (res.status === 200) navigate('/main');
      // if (res.status === 200) window.location = '/about';
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
