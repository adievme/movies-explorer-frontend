import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({ email, password })
      .then(res => {
        // Если есть ошибка то открываем попап с ошибкой, иначе авторизуемся
        if (res.message) {
          console.log(res.message)
        } else {
          history.push('/profile')
        }
      })
      .then(resetForm)
  };  
  return (
    <section className="auth">
      <div className="auth__container">
        <Link to="/">
          <img className='auth__logo' src={logo} alt='логотип'/>
        </Link>
        <h2 className='auth__title'>Рады видеть!</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
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
          <button className="auth__button" type="submit">Войти</button>
        </form>
        <p className="auth__caption">Еще не зарегистрированы? <Link className="auth__caption auth__caption_link" to="/signup">Регистрация</Link></p>
      </div>
    </section>
  );
}

export default Login;