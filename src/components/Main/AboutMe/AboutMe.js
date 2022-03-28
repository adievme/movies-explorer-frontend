import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <div className='about-me__content'>
        <h2 className='about-me__header'>Студент</h2>
        <div className='about-me__description'>
          <div className='about-me__column'>
            <h2 className='about-me__title'>Инсаф</h2>
            <h3 className='about-me__subtitle'>Фронтенд-разработчик, 21 год</h3>
            <p className='about-me__article'>
              текст, который нужно придумать, текст, который нужно придумать, текст, который нужно придумать, текст, который нужно придумать, 
              текст, который нужно придумать, текст, который нужно придумать, текст, который нужно придумать, текст, который нужно придумать, 
              текст, который нужно придумать, текст, который нужно придумать, текст, который нужно придумать, текст, который нужно придумать, 
              текст, который нужно придумать, текст, который нужно придумать, текст, который нужно придумать, текст, который нужно придумать
            </p>

            <ul className='about-me__list-contact'>
              <a className='about-me__link' href='https://github.com/adievme?tab=repositories'>
                <li className='about-me__item>'>Github</li>
              </a>
              <a className='about-me__link' href='https://t.me/Adievme'>
                <li className='about-me__item>'>Telegram</li>
              </a>
            </ul>  
          </div>

          <img className='about-me__image' src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg' alt='портрет' />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;