import './MoviesCard.css';
import '../../Movies/MoviesCard/MoviesCard.css';
// import foto from '../../../images/foto.jpg';

function MoviesCard({ movie, onDeleteMovie }) {
  function handleDeleteMovie() {
    onDeleteMovie(movie)
  }

  return (
    <li className="element__item">
      <img className="element__image" src={movie.thumbnail} alt="превью фильма"/>
      <div className="element__figure">
        <div className='element__info'>
          <h2 className="element__name">{movie.nameRU}</h2>
          <p className="element__duration">{movie.duration}</p>
        </div>
        <div className="element__like-wrapper">
          <button className="element__delete" onClick={handleDeleteMovie}/>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;