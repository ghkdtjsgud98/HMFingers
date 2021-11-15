import LandingPage from './screens/LandingPage';
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
        <Route path='/' element={<LandingPage/>} exact />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/main' element={<MainPage/>} />
      </Routes>
      {/* TEST */}
    </>
  );
}

export default App;

