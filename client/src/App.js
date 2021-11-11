import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Class 형태로 만들어진 컴포넌트는 꼭 render 함수 있어야하며 render 함수 내부에서 JSX 코드를 return 해주어야함.
class App extends Component {

  //render 함수
  render() {
  
    return (
    
      //JSX
      <div>리액트는 처음이지?</div>
    );
  }
}
export default App; //현 컴포넌트를 다른 곳에서 불러와 사용할 수 있도록 내보내기를 해줌.