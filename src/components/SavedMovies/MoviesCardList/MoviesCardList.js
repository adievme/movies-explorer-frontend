import MoviesCard from "../MoviesCard/MoviesCard";
import '../../Movies/MoviesCardList/MoviesCardList.css';
import './MoviesCardList.css';

function MoviesCardList({ filteredMovies, onDeleteMovie, short }) {
  return (
    <section className="elements">
      <ul className="elements__list">
      {filteredMovies
        .filter(movie => !short || movie.duration <= 40)
        .map(movie => <MoviesCard key={movie.id} movie={movie} onDeleteMovie={onDeleteMovie} />)
      }
      </ul>
    </section>
  );
}

export default MoviesCardList;