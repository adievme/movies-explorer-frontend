import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound () {
  const history = useHistory()
  const location = history.location.pathname
  
  return (
    <section className={`not-found ${location === '/' && 'not-found_hidden'}`}>
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">
        Страница не найдена
      </p>
      <Link className="not-found__link-back" to="/">Назад</Link>
    </section>
  )
}

export default PageNotFound; 