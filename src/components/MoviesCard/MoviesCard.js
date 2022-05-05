import React, { useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './MoviesCard.css';

function MoviesCard({ movies, isSaved, savedMovies }) {
  const [isLike, setIsLike] = useState(false)
  const currentUser = React.useContext(CurrentUserContext);

  const movie = {
    country: movies.country || 'нет',
    director: movies.director || 'Нет',
    duration: movies.duration || 0,
    year: movies.year || 'Нет',
    description: movies.description || 'Нет',
    image: isSaved ? movies.image : `https://api.nomoreparties.co${movies.image.url}`,
    trailer: isSaved ? movies.trailer : movies.trailerLink,
    thumbnail: isSaved ? movies.thumbnail : `https://api.nomoreparties.co${movies.image.formats.thumbnail.url}`,
    movieId: isSaved ? movies._id : movies.id,
    nameRU: movies.nameRU || 'Нет',
    nameEN: movies.nameEN || 'Нет',
  }

  function handleLikeCard(e) {
    savedMovies(movie);
    // if (isLike) {
    //     // const searchMovie = savedMovies.find((item) => item.movieId === String(movies.id));
    //     // movieDeleteFromSavedMovies(searchMovie._id);
    // }
    // else {
        
    // }
    setIsLike(!isLike);
}

  const CardLikeClassName = (
    `element__like ${isLike && 'element__like_active'}`
  );

  return (
    <li className="element__item">
      <img className="element__image" src={isSaved ? movies.image : `https://api.nomoreparties.co${movies.image.url}`} alt="превью фильма"/>
      <div className="element__figure">
        <div className='element__info'>
          <h2 className="element__name">{movie.nameRU}</h2>
          <p className="element__duration">{movie.duration} мин</p>
        </div>
        <div className="element__like-wrapper">
          <button className={CardLikeClassName} onClick={handleLikeCard} />
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;