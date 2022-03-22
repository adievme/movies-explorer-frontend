import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import './App.css';
import Profile from '../Profile/Profile.js';
import Navigation from '../Navigation/Navigation.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';

// import MenuPopap from '../MenuPopap/MenuPopap.js';
// import Preloader from '../Movies/Preloader/Preloader.js';

function App() {
  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main />
          <Footer />
          {/* <Preloader /> */}
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path='/profile'>
          <Navigation />
          <Profile />
          {/* <MenuPopap /> */}
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
