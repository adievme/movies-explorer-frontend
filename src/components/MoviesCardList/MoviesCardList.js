import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({ filteredMovies, short, setNumberMoviesInDisplay, numberMoviesInDisplay, numberMoviesAdd, isSaved, savedMovies }) {
  function handleAddMoviesInDisplay() {
    setNumberMoviesInDisplay(movies => movies + numberMoviesAdd);
  }
  return (
    <section className="elements">
      <ul className="elements__list">
        {filteredMovies
          .filter(movie => !short || movie.duration <=40)
          .slice(0, numberMoviesInDisplay)
          .map(movie => <MoviesCard key={isSaved ? movie.movieId : movie.id} movies={movie} isSaved={isSaved} savedMovies={savedMovies} />)}
      </ul>

      <button className={numberMoviesInDisplay >= filteredMovies.length ? `elements__more_disable` : `elements__more`} onClick={handleAddMoviesInDisplay}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;