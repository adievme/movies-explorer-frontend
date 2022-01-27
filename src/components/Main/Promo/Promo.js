import React from 'react';
import './Promo.css';
import logoPromo from '../../../images/praktikum-logo.svg'

function Promo() {
  return (
    <div className='promo'>
      <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
      <img className='promo__image' src={logoPromo} />
    </div>
  );
}

export default Promo;