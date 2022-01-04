import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import GlobalStyle from './GlobalStyle';
import MainPage from './screens/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<LoginPage/>} exact />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/main' element={<MainPage/>} />
      </Routes>
    </>
  );
}

export default App;

