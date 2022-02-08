import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <h2 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <p className='footer__text'>&copy; {new Date().getFullYear()}</p>
        <ul className='footer__list-links'>
          <a className='footer__link' href='https://practicum.yandex.ru/'>
            <li className='footer__item footer__text'>Яндекс.Практикум</li>
          </a>
          <a className='footer__link' href='https://github.com/adievme?tab=repositories'>
            <li className='footer__item footer__text'>Github</li>
          </a>
          <a className='footer__link' href='mailto:adievme99@yandex.ru'>
            <li className='footer__item footer__text'>adievme99@yandex.ru</li>
          </a>
        </ul>
      </div>
    </section>

  );
}

export default Footer;