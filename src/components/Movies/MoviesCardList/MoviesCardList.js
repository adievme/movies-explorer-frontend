import MoviesCard from "../MoviesCard/MoviesCard";
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
        {/* <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard /> */}
      </ul>

      <button className="elements__more">Ещё</button>
    </section>
  );
}

export default MoviesCardList;