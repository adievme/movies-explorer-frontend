import './MoviesCard.css';
import '../../Movies/MoviesCard/MoviesCard.css';
// import foto from '../../../images/foto.jpg';
import setDurationInString from "../../../utils/setDurationInString"

function MoviesCard({ movie, onDeleteMovie }) {
  const durationString = setDurationInString(movie.duration);
  function handleDeleteMovie() {
    onDeleteMovie(movie)
  }
  console.log(movie)

  return (
    <li className="element__item">
      <a href={movie.trailer} target="_blank">
        <img className="element__image" src={movie.thumbnail} alt="превью фильма"/>
      </a>
      <div className="element__figure">
        <div className='element__info'>
          <h2 className="element__name">{movie.nameRU}</h2>
          <p className="element__duration">{durationString}</p>
        </div>
        <div className="element__like-wrapper">
          <button className="element__delete" onClick={handleDeleteMovie}/>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;