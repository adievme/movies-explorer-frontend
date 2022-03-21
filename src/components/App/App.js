import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import './App.css';
import Profile from '../Profile/Profile.js';

function App() {
  return (
    <div className='page'>
      <Route exact path='/'>
        <Header />
        <Main />
        <Footer />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
    </div>
  );
}

export default App;
