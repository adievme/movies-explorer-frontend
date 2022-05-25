import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import useWindowSize from '../../../hooks/useWindowSize';
// import Preloader from "../../Preloader/Preloader";

function MoviesCardList({ filteredMovies, short, onLikeButtonClick, isSavedMovie }) {

  const windowSize = useWindowSize();

  const [maxCards, setMaxCards] = React.useState(0);
  const [loadCards, setLoadCards] = React.useState(0);
  const [maxCardsAfterLoad, setMaxCardsAfterLoad] = React.useState(0);

  function handleCardsLoaderClick() {
    setMaxCardsAfterLoad(maxCardsAfterLoad + loadCards);
  }

  React.useEffect(() => {
    setMaxCards(windowSize > 1023 ? 12 : windowSize > 767 ? 8 : 5);
    setLoadCards(windowSize > 1023 ? 3 : windowSize > 767 ? 2 : 1);
    setMaxCardsAfterLoad(maxCards);
  }, [windowSize, maxCards]);

  return (
    <section className="elements">
      <ul className="elements__list">
        {/* <Preloader isOpen={isOpenPreloader} /> */}
        {filteredMovies
          .filter(movie => !short || movie.duration <= 40)
          .slice(0, maxCardsAfterLoad)
          .map((movie) => {
            return <MoviesCard 
              key={movie.id} 
              movie={movie} 
              onLikeButtonClick={onLikeButtonClick}
              isSavedMovie={isSavedMovie}
            />
          })
        }
      </ul>
      {filteredMovies.length >= maxCardsAfterLoad && 
        (<button className="elements__more" type="button" onClick={handleCardsLoaderClick}>Ещё</button>)
      }
      
    </section>
  );
}

export default MoviesCardList;