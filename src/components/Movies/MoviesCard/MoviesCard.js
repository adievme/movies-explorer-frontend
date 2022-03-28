import './MoviesCard.css';
import foto from '../../../images/foto.jpg';

function MoviesCard() {
  return (
    <li className="element__item">
      <img className="element__image" src={foto} />
      <div className="element__figure">
        <div className='element__info'>
          <h2 className="element__name">33 слова о дизайне</h2>
          <p className="element__duration">122 мин</p>
        </div>
        <div className="element__like-wrapper">
          <button className="element__like" />
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;