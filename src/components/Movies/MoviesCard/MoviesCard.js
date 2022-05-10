import React, { useState } from 'react';
import './MoviesCard.css';
import foto from '../../../images/foto.jpg';

function MoviesCard({ movie }) {
  // console.log(movie) 
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
      <a href={movie.trailerLink} target="_blank">
        <img className="element__image" src={`https://api.nomoreparties.co${movie.image.url}`} alt="превью фильма"/>
      </a>
      <div className="element__figure">
        <div className='element__info'>
          <h2 className="element__name">{movie.nameRU}</h2>
          <p className="element__duration">{movie.duration} мин</p>
        </div>
        <div className="element__like-wrapper">
          <button className={CardLikeClassName} onClick={handleLike} />
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;