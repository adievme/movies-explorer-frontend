import React, { useState } from 'react';
import setDurationInString from "../../../utils/setDurationInString"
import './MoviesCard.css';

function MoviesCard({ movie, onLikeButtonClick, handleDeleteMovie, isSavedMovie }) {
  const durationString = setDurationInString(movie.duration);

  function handleToggleLikeMovie() {
    onLikeButtonClick(movie)
  }

  const isSavedMovieStatus = isSavedMovie(movie)

  const CardLikeClassName = (
    `element__like ${isSavedMovieStatus && 'element__like_active'}`
  );
  // console.log(isSavedMovie)

  return (
    <li className="element__item">
      <a href={movie.trailerLink} target="_blank">
        <img className="element__image" src={`https://api.nomoreparties.co${movie.image.url}`} alt="превью фильма"/>
      </a>
      <div className="element__figure">
        <div className='element__info'>
          <h2 className="element__name">{movie.nameRU}</h2>
          <p className="element__duration">{durationString}</p>
        </div>
        <div className="element__like-wrapper">
          <button className={CardLikeClassName} onClick={handleToggleLikeMovie} />
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;