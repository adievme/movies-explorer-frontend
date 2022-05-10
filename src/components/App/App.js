import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import './App.css';
import Profile from '../Profile/Profile.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js'
import MenuPopap from '../MenuPopap/MenuPopap.js';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { authApi } from '../../utils/AuthApi.js';
import { mainApi } from '../../utils/MainApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import EditProfilePopap from '../EditProfilePopap/EditProfilePopap.js';

// import Preloader from '../Movies/Preloader/Preloader.js';

function App() {
  const history = useHistory()

  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const token = localStorage.getItem('token');

  const [isOpenMenuPopap, setIsOpenMenuPopap] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  function handleTokenCheck() {
    authApi.checkToken(token)
      .then((dataUser) => {
        if (dataUser) {
          setCurrentUser(dataUser);
          setLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  }

  const onLogin = ({ email, password }) => {
    authApi.login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token)
          setLoggedIn(true)
          handleTokenCheck()
        }
      })
      .catch((err) => console.log(err));
  }

  const onRegister = ({ name, email, password }) => {
    // setIsOpenPreloader(true);
    authApi.register(name, email, password)
      .then((res) => {
        if (res.statusCode !== 400) {
          onLogin({ email, password });
        }
      })
      .catch((err) => console.log(err))
      // .finally(() => setIsOpenPreloader(false));
  }

  function onLogout() {
    setLoggedIn(false);
    localStorage.clear();
    history.push("/signin")
  }

  React.useEffect(() => {
    handleTokenCheck();
    console.log(loggedIn)
  }, []);

  React.useEffect(() => {
    if (loggedIn === true) {
      mainApi.getUserInfo(token)
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => console.log(err));

      history.push("/movies");
    }
  }, [loggedIn]);

  function handleUpdateUser(dataUser) {
    mainApi.setUserInfo(dataUser, token)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(err => console.log(err))
  }

  function handleOpenMenuPopap() {
    setIsOpenMenuPopap(true)
  }

  function handleEditProfileClick() {
    setIsEditPopupOpen(true)
  }

  function closeAllPopups() {
    setIsOpenMenuPopap(false)
    setIsEditPopupOpen(false)
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', closeByEscape)
    
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Route exact path='/'>
          <Main loggedIn={loggedIn} onMenuPopup={handleOpenMenuPopap}/>
        </Route>

        <EditProfilePopap isOpen={isEditPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <Switch>
          
          <Route path="/signin">
            <Login onLogin={onLogin}/>
          </Route>

          <Route path="/signup">
            <Register onRegister={onRegister} />
          </Route>

          <ProtectedRoute 
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            onMenuPopup={handleOpenMenuPopap}
          />

          <ProtectedRoute 
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            onMenuPopup={handleOpenMenuPopap}
          />

          <ProtectedRoute 
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onLogout={onLogout}
            onEditButton={handleEditProfileClick}
            onMenuPopup={handleOpenMenuPopap}
          />

          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>

        {/* <Footer /> */}
        {/* <Preloader /> */}
        <MenuPopap isOpen={isOpenMenuPopap} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
