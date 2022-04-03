import MoviesCard from "../MoviesCard/MoviesCard";
import '../../Movies/MoviesCardList/MoviesCardList.css';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className="elements">
      <ul className="elements__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
    </section>
  );
}

export default MoviesCardList;