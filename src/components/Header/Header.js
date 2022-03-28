import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
  return (
    <section className='header'>
      <div className="header__content">
        <img className='header__logo' src={logo} alt='логотип'/>
        <div className='header__auth-container'>
          <Link to='/signup' className='header__auth' >Регистрация</Link>
          <Link to='/signin' className='header__auth header__auth_signin'>Войти</Link>
        </div>
      </div>
    </section>
  );
}
  
export default Header;