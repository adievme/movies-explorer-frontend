import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedIn, onMenuPopup, isOpenPreloader }) { 
  const [location, setLocation] = useState('') 
  const pathname = useLocation().pathname;

  useEffect(() => {
    setLocation(pathname)
  }, [pathname])

  if (loggedIn) {
    return (
      <Navigation loggedIn={loggedIn} onMenuPopup={onMenuPopup} location={location} isOpenPreloader={isOpenPreloader} />
    )
  } else {
    return (      
      <section className="header">
        <div className="header__content">
          <Link to='/'>
            <img className='header__logo' src={logo} alt='логотип'/>
          </Link>
          <div className="header__auth-container">
            <Link to='/signup' className='header__auth'>Регистрация</Link>
            <Link to='/signin' className='header__auth header__auth_signin'>Войти</Link>
          </div>
        </div>
      </section>
    )
  }
}
  
export default Header;