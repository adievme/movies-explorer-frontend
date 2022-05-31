import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Preloader from '../Preloader/Preloader';
import '../Login/Login.css';
import './Register.css';

function Register({ onRegister, errorMessage, isOpen }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({ name, email, password })

    resetForm();
  };
  return (
    <section className="auth">
      <div className="auth__container">
        <div className="auth__logo-container">
          <Link to="/">
            <img className={`auth__logo ${isOpen && 'auth__logo_disabled'}`} src={logo} alt='логотип'/>
            <Preloader isOpen={isOpen}/>
          </Link>
        </div>
        <h2 className='auth__title'>Добро пожаловать!</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <span className='auth__signature'>Имя</span>
          <input 
            className="auth__input" 
            type="text" 
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <span className='auth__signature'>E-mail</span>
          <input 
            className="auth__input" 
            type="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span className='auth__signature'>Пароль</span>
          <input 
            className="auth__input auth__input_margin" 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
          <span className='auth__signature auth__signature_error'>{errorMessage}</span>
          <button className="auth__button auth__button_register" type="submit">Зарегистрироваться</button>
        </form>
        <p className="auth__caption">Уже зарегистрированы? <Link className="auth__caption auth__caption_link" to="/signin">Войти</Link></p>
      </div>
    </section>
  );
}

export default Register;