import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import icon from '../../images/icon-account.svg';
import burger from '../../images/burger.svg';
import './Navigation.css';

function Navigation() {
  return (
    <section className='navigation'>
      <div className='navigation__content'>
        <Link to='/'>
          <img className='navigation__logo' src={logo} alt='логотип'/>
        </Link>
        <button className='navigation__button-burger'>
          <img className='navigation__burger' src={burger} alt='меню' />
        </button>
        <div className='navigation__container'>
          <div className='navigation__films-container'>
            <Link className='navigation__link-films'>Фильмы</Link>
            <Link className='navigation__link-films navigation__link-films_weight'>Сохраненные фильмы</Link>
          </div>
          <Link className='navigation__link-account' to="/profile">
            <p className='navigation__account-text'>Аккаунт</p>
            <img className='navigation__icon' src={icon} alt='иконка' />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navigation;