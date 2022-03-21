import React from 'react';
import './Promo.css';
import logoPromo from '../../../images/praktikum-logo.svg'

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__content'>
        <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__image' src={logoPromo} alt='лого практикум' />
      </div>
    </section>
  );
}

export default Promo;