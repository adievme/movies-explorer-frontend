import React from 'react';
import './Portfolio.css';
import icon from '../../../images/link-icon.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__content'>
        <h2 className='portfolio__header'>Портфолио</h2>
        <ul className='portfolio__list-projects'>
          <a className='portfolio__link-project' href='https://github.com/adievme/how-to-learn' target="_blank" rel="noreferrer">
            <li className='portfolio__item-project'>Статичный сайт</li>
            <img className='portfolio__icon-link' src={icon} alt='icon'/>
          </a>
          <a className='portfolio__link-project' href='https://github.com/adievme/russian-travel' target="_blank" rel="noreferrer">
            <li className='portfolio__item-project'>Адаптивный сайт</li>
            <img className='portfolio__icon-link' src={icon} alt='icon'/>
          </a>
          <a className='portfolio__link-project' href='https://github.com/adievme/react-mesto-api-full' target="_blank" rel="noreferrer">
            <li className='portfolio__item-project'>Одностраничное приложение</li>
            <img className='portfolio__icon-link' src={icon} alt='icon'/>
          </a>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;