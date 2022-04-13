import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login() {
  return (
    <section className="auth">
      <div className="auth__container">
        <Link to="/">
          <img className='auth__logo' src={logo} alt='логотип'/>
        </Link>
        <h2 className='auth__title'>Рады видеть!</h2>
        <form className="auth__form">
          <span className='auth__signature'>E-mail</span>
          <input 
            className="auth__input" 
            type="email" 
          />
          <span className='auth__signature'>Пароль</span>
          <input 
            className="auth__input auth__input_margin" 
            type="password" 
          />
          <button className="auth__button">Войти</button>
        </form>
        <p className="auth__caption">Еще не зарегистрированы? <Link className="auth__caption auth__caption_link" to="/signup">Регистрация</Link></p>
      </div>
    </section>
  );
}

export default Login;