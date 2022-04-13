import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import SavedMovies from '../SavedMovies/SavedMovies.js'
import MenuPopap from '../MenuPopap/MenuPopap.js';

import * as auth from '../../utils/auth';

// import Preloader from '../Movies/Preloader/Preloader.js';

function App() {
  const history = useHistory();

  const [userData, setUserData] = useState({});

  const onRegister = ({ email, name, password }) => {
    return auth.register(email, name, password)
      .then(res => res)
      .catch(err => console.log(err));
  };

  const onLogin = ({ email, password }) => {
    return auth.authorize(email, password)
      .then((res) => {
        // Если токен валидный, то сохраняем его в localStorage, вызываем ф-ю authorize для получения email и выполняем вход
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          authorize(res.token)
          // setLoggedIn(true);

          history.push('/profile')

          return res
        } else {
          return res
        }
      })
      .catch(err => console.log(err));
  };

  const authorize = (jwt) => {
    return auth.getContent(jwt)
      .then((res) => {
        if (res) {
          // setLoggedIn(true);
          setUserData(res)
          
          // history.push('/lenta')
        }
      })
      .catch(err => console.log(err));
  };

  function onSignOut() {
    localStorage.removeItem('jwt')

    setUserData({})

    // setLoggedIn(false)
    // setUserEmail('')
    // setIsMenuClick(false)
    // setToken('')
    // console.log(token)

    history.push('/signin')
  }


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
          <Login onLogin={onLogin} />
        </Route>
        <Route path="/signup">
          <Register onRegister={onRegister} />
        </Route>

        <Route path="/movies">
          <Navigation onMenuPopap={handleOpenMenuPopap} />
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <Navigation onMenuPopap={handleOpenMenuPopap} />
          <SavedMovies />
        </Route>

        <Route path='/profile'>
          <Navigation onMenuPopap={handleOpenMenuPopap} />
          <Profile onSignOut={onSignOut} userData={userData} />
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
