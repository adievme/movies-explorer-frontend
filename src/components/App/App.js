import React, { useState } from 'react';
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
import Movies from '../Movies/Movies.js';
import MenuPopap from '../MenuPopap/MenuPopap.js';

// import Preloader from '../Movies/Preloader/Preloader.js';

function App() {
  const [isOpenMenuPopap, setIsOpenMenuPopap] = useState(false)

  function handleOpenMenuPopap() {
    setIsOpenMenuPopap(true)
  }

  function closeMenuPopap() {
    setIsOpenMenuPopap(false)
  }

  return (
    <div className='page'>
      <Switch>
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

        <Route path="/movies">
          <Navigation onMenuPopap={handleOpenMenuPopap} />
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <Navigation onMenuPopap={handleOpenMenuPopap} />
          <Movies />
        </Route>

        <Route path='/profile'>
          <Navigation onMenuPopap={handleOpenMenuPopap} />
          <Profile />
        </Route>

        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
      {/* <Preloader /> */}
      <MenuPopap isOpen={isOpenMenuPopap} onClose={closeMenuPopap} />
    </div>
  );
}

export default App;
