import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__header'>Студент</h2>
      <div className='about-me__description'>
        <div className='about-me__column'>
          <h2 className='about-me__title'>Инсаф</h2>
          <h3 className='about-me__subtitle'>Фронтенд-разработчик, 21 год</h3>
          <p className='about-me__article'>
            Я из города Казань, учусь в КАИ на факультете информационных технологий и систем. 
            Я увлекаюсь велоспортом и бегом. С 2020 года начал кодить. С 2019 года работаю курьером в Яндекс Еде,
            и за хорошую работу я и получил курс по веб-разработке в Яндекс Практикуме, чему был очень рад. 
            и т.д и т.п и т.д и т.п и т.д и т.п...
          </p>

          <ul className='about-me__list-contact'>
            <a className='about-me__link' href='https://github.com/adievme?tab=repositories'>
              <li className='about-me__item>'>Github</li>
            </a>
            <a className='about-me__link' href='mailto:adievme99@yandex.ru'>
              <li className='about-me__item>'>Почта</li>
            </a>
          </ul>  
        </div>

        <img className='about-me__image' src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg' alt='портрет' />
      </div>
    </section>
  );
}

export default AboutMe;