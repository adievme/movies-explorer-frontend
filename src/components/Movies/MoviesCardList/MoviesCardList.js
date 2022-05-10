import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import useWindowSize from '../../../hooks/useWindowSize';

function MoviesCardList({ filteredMovies, short }) {
  const windowSize = useWindowSize();

  const [maxCards, setMaxCards] = React.useState(0);
  const [loadCards, setLoadCards] = React.useState(0);
  const [maxCardsAfterLoad, setMaxCardsAfterLoad] = React.useState(0);

  // const [isVisibilityButtonMore, setIsVisibilityButtonMore] = React.useState(false);

  function handleCardsLoaderClick() {
    setMaxCardsAfterLoad(maxCardsAfterLoad + loadCards);
  }

  // function handleVisibilityButtonMore() {
  //   if (filteredMovies.length <= maxCardsAfterLoad) {
  //     setIsVisibilityButtonMore(true)
  //   } else {
  //     setIsVisibilityButtonMore(false)
  //   }
  // }
  // console.log(maxCardsAfterLoad, isVisibilityButtonMore)

  React.useEffect(() => {
    setMaxCards(windowSize > 1023 ? 12 : windowSize > 767 ? 8 : 5);
    setLoadCards(windowSize > 1023 ? 3 : windowSize > 767 ? 2 : 1);
    setMaxCardsAfterLoad(maxCards);
  }, [windowSize, maxCards]);

  // React.useEffect(() => {
  //   handleVisibilityButtonMore();
  // }, [maxCardsAfterLoad])

  return (
    <section className="elements">
      <ul className="elements__list">
        {filteredMovies
          .filter(movie => !short || movie.duration <= 40)
          .slice(0, maxCardsAfterLoad)
          .map(movie => <MoviesCard key={movie.id} movie={movie} />)
        }
      </ul>
      {filteredMovies.length >= maxCardsAfterLoad && 
        (<button className="elements__more" type="button" onClick={handleCardsLoaderClick}>Ещё</button>)
      }
      
    </section>
  );
}

export default MoviesCardList;