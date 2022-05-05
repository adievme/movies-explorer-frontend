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
import { CurrentUserContext } from "../../context/CurrentUserContext";
// import { LoggedInContext } from "../../context/LoggedInContext";
import { authApi } from '../../utils/AuthApi.js';
import { mainApi } from '../../utils/MainApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// import Preloader from '../Movies/Preloader/Preloader.js';

function App() {
  const history = useHistory()

  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const token = localStorage.getItem('token');

  const [isOpenMenuPopap, setIsOpenMenuPopap] = useState(false);

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

  function handleOpenMenuPopap() {
    setIsOpenMenuPopap(true)
  }

  function closeMenuPopap() {
    setIsOpenMenuPopap(false)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
          <Route exact path='/'>
            <Header />
            <Main />
            <Footer />
          </Route>

          <Navigation onMenuPopap={handleOpenMenuPopap}/>

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
          />

          <ProtectedRoute 
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          />

          <ProtectedRoute 
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onLogout={onLogout}
          />

          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
        {/* <Preloader /> */}
        <MenuPopap isOpen={isOpenMenuPopap} onClose={closeMenuPopap} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
