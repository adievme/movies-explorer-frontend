import React, { useState } from 'react';
import './MoviesCard.css';
import foto from '../../../images/foto.jpg';

function MoviesCard() {
  const [like, setLike] = React.useState(false)

  function handleLike() {
    if (like) {
      setLike(false)
    } else {
      setLike(true)
    }
  }

  const CardLikeClassName = (
    `element__like ${like && 'element__like_active'}`
  );

  return (
    <li className="element__item">
      <img className="element__image" src={foto} alt="превью фильма"/>
      <div className="element__figure">
        <div className='element__info'>
          <h2 className="element__name">33 слова о дизайне</h2>
          <p className="element__duration">122 мин</p>
        </div>
        <div className="element__like-wrapper">
          <button className={CardLikeClassName} onClick={handleLike} />
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;