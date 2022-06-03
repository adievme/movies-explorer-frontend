import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js'
import Profile from '../Profile/Profile.js';

import Login from '../Login/Login.js';
import Register from '../Register/Register.js';

import PageNotFound from '../PageNotFound/PageNotFound.js';
import MenuPopap from '../MenuPopap/MenuPopap.js';
import EditProfilePopap from '../EditProfilePopap/EditProfilePopap.js';
import InfoTooltipPopup from '../InfoToolTipPopup/InfoToolTipPopup';

import showServerErrorText from '../../utils/showServerErrorText';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { authApi } from '../../utils/AuthApi.js';
import { mainApi } from '../../utils/MainApi.js';

import './App.css';

function App() {
  const history = useHistory()

  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);

  const [isOpenMenuPopap, setIsOpenMenuPopap] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isOpenInfoPopup, setIsOpenInfoPopup] = React.useState(false);
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  
  const [savedMovies, setSavedMovies] = useState([])

  const token = localStorage.getItem('token');
  const location = history.location.pathname;

  const onLogin = ({ email, password }) => {
    setIsOpenPreloader(true);

    authApi.login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token)
          setLoggedIn(true)

          handleTokenCheck();
          history.push("/movies");
        }
      })
      .catch((err) => visibleErrorMessage(err))
      .finally(() => setIsOpenPreloader(false));
  }

  const onRegister = ({ name, email, password }) => {
    setIsOpenPreloader(true);

    authApi.register(name, email, password)
      .then((res) => {
        if (res.statusCode !== 400) {
          onLogin({ email, password });
        }
      })
      .catch((err) => visibleErrorMessage(err))
      .finally(() => setIsOpenPreloader(false));
  }

  function handleTokenCheck() {
    authApi.checkToken(token)
      .then((dataUser) => {
        if (dataUser) {
          setCurrentUser(dataUser);
          setLoggedIn(true)
        }
      })
      .catch((err) => console.log(err));
  }

  function onLogout() {
    setLoggedIn(false);
    localStorage.clear();

    history.push("/")
  }

  useEffect(() => {
    if (token) {
      handleTokenCheck()
      if (location === "/signup" || location === "/signin") {
        history.push("/movies");
      } else {
        history.push(location);
      }
    }
  },[loggedIn])

  function handleUpdateUser(dataUser) {
    mainApi.setUserInfo(dataUser, token)
      .then((res) => {
        setCurrentUser(res)
      
        closeAllPopups()
        visibleErrorMessage(200) // отображаем уведомление об успешном запросе к серверу при сохранении профиля.
      })
      .catch((err) => visibleErrorMessage(err));
  }

  React.useEffect(() => {
    if (currentUser._id !== undefined) {
      mainApi
        .getMovies(token)
        .then((savedMovies) => {

          const moviesThisUser = savedMovies.filter(movie => movie.owner === currentUser._id);
          setSavedMovies(moviesThisUser);
          
          const savedMoviesJSON = JSON.stringify(moviesThisUser);
          localStorage.setItem("savedMovies", savedMoviesJSON);
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser]);

  function setStatusMovie(dataMovie) {
    const isSavedMovie = savedMovies.some((i) => i.movieId === dataMovie.id);
    return isSavedMovie;
  }

  function toggleLikeMovie(dataMovie) {
    const isSavedMovie = savedMovies.some((i) => i.movieId === dataMovie.id);
    if (isSavedMovie) {
      const savedMovie = savedMovies.find((i) => i.movieId === dataMovie.id);
      handleDeleteMovie(savedMovie);
    }
    if (!isSavedMovie) {
      handleSaveMovie(dataMovie);
    }
  }

  function handleSaveMovie(dataMovie) {
    setIsOpenPreloader(true)
    mainApi
      .addMovie(dataMovie, token)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => openInfoPopupWithError(err))
      .finally(() => setIsOpenPreloader(false));
  }

  function handleDeleteMovie(movie) {
    setIsOpenPreloader(true)
    mainApi
      .deleteMovie(movie._id, token)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((err) => openInfoPopupWithError(err))
      .finally(() => setIsOpenPreloader(false));
  }

  function visibleErrorMessage(errStatus) {
    setErrorMessage(showServerErrorText(errStatus));
  }

  function openInfoPopupWithError(errStatus) {
    setErrorMessage(showServerErrorText(errStatus));
    setIsOpenInfoPopup(true);
  }

  function handleCloseInfoPopup() {
    setIsOpenInfoPopup(false);
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

    setErrorMessage('')
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
        <Route exact path="/">
          <Main loggedIn={loggedIn} onMenuPopup={handleOpenMenuPopap} />
        </Route>

        <EditProfilePopap isOpen={isEditPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
        <Switch>
          <Route path="/signin">
            <Login 
              onLogin={onLogin} 
              errorMessage={errorMessage} 
              setErrorMessage={setErrorMessage} 
              isOpen={isOpenPreloader}
            />
          </Route>

          <Route path="/signup">
            <Register onRegister={onRegister} errorMessage={errorMessage} setErrorMessage={setErrorMessage} isOpen={isOpenPreloader} />
          </Route>

          <ProtectedRoute 
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            onMenuPopup={handleOpenMenuPopap}
            onLikeButtonClick={toggleLikeMovie}
            isSavedMovie={setStatusMovie}
            isOpenPreloader={isOpenPreloader}
            setIsOpenPreloader={setIsOpenPreloader}
          />

          <ProtectedRoute 
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            onMenuPopup={handleOpenMenuPopap}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            token={token}
            onDeleteMovie={handleDeleteMovie}
            setIsOpenPreloader={setIsOpenPreloader}
            isOpenPreloader={isOpenPreloader}
          />

          <ProtectedRoute 
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onLogout={onLogout}
            onEditButton={handleEditProfileClick}
            onMenuPopup={handleOpenMenuPopap}
            successfullMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          <Route path="*">
            <PageNotFound />
          </Route> 
        </Switch> 
        <InfoTooltipPopup
          isOpen={isOpenInfoPopup}
          message={errorMessage}
          onClose={handleCloseInfoPopup}
        />
        <MenuPopap isOpen={isOpenMenuPopap} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
