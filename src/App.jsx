// src/App.jsx

import { Routes, Route } from 'react-router'

import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Dashboard from './components/Dashboard/Dashboard';
const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
      <Route path='/' element={user ? <Dashboard /> : <Landing /> } />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes> 
    </>
  );
};

export default App;

