import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import icon from '../../images/icon-account.svg';
// import burger from '../../images/burger.svg';
import './Navigation.css';
// import MenuPopap from '../MenuPopap/Me

function Navigation(props) {
  return (
    <section className='navigation'>
      <div className='navigation__content'>
        <Link to='/'>
          <img className='navigation__logo' src={logo} alt='логотип'/>
        </Link>
        <button className='navigation__button-burger' onClick={props.onMenuPopap} type="button" />
        <div className='navigation__container'>
          <div className='navigation__films-container'>
            <Link className='navigation__link-films' to="/movies">Фильмы</Link>
            <Link className='navigation__link-films navigation__link-films_weight' to="/saved-movies">Сохраненные фильмы</Link>
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