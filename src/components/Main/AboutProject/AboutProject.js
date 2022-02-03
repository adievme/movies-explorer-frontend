import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <div className='about-project'>
      <h1 className='about-project__header'>О проекте</h1>
      <div className='about-project__container'>
        <div className='about-project__text-container'>
          <h2 className='about-project__header-text'>Дипломный проект включал 5 этапов</h2>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__text-container'>
          <h2 className='about-project__header-text'>На выполнение диплома ушло 5 недель</h2>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__duration-container'>
        <div className='about-project__duration about-project__duration_one'>1 неделя</div>
        <div className='about-project__duration about-project__duration_two'>4 недели</div>
        <p className='about-project__duration-caption'>Back-end</p>
        <p className='about-project__duration-caption about-project__duration-caption_two'>Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;