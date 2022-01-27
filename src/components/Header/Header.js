import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
  return (
    <div className='header__container'>
      <img className='header__logo' src={logo} alt='логотип'/>
      <div className='header__auth-container'>
        <button className='header__auth'>Регистрация</button>
        <button className='header__auth header__auth_signin'>Войти</button>
      </div>
    </div>
  );
}
  
export default Header;