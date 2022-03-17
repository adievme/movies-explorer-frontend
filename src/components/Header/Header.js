import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
  return (
    <section className='header'>
      <img className='header__logo' src={logo} alt='логотип'/>
      <div className='header__auth-container'>
        <Link to='/signup'><button className='header__auth'>Регистрация</button></Link>
        <Link to='/signin'><button className='header__auth header__auth_signin'>Войти</button></Link>
      </div>
    </section>
  );
}
  
export default Header;