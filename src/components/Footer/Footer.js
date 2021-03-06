import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <div className='footer__content'>
        <h2 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__container'>
          <p className='footer__text footer__text_date'>&copy; {new Date().getFullYear()}</p>
          <ul className='footer__list-links'>
            <a className='footer__link' href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer">
              <li className='footer__item footer__text'>Яндекс.Практикум</li>
            </a>
            <a className='footer__link' href='https://github.com/adievme?tab=repositories' target="_blank" rel="noreferrer">
              <li className='footer__item footer__text'>Github</li>
            </a>
            <a className='footer__link' href='https://t.me/Adievme' target="_blank" rel="noreferrer">
              <li className='footer__item footer__text'>Telegram</li>
            </a>
          </ul>
        </div>
      </div>
    </section>

  );
}

export default Footer;