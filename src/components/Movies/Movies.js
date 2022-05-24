import React, { useState, useEffect } from 'react';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from '../Footer/Footer.js';
import Navigation from "../Navigation/Navigation";
import { moviesApi } from '../../utils/MoviesApi';

function Movies({ onMenuPopup, loggedIn, onLikeButtonClick, isSavedMovie }) {
  // const [isOpenPreloader, setIsOpenPreloader] = useState(false)

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [short, setShort] = useState(false);

  const updateMovies = (movies) => {
    setMovies(movies);
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  const updateFilteredMovies = (movies) => {
    setFilteredMovies(movies);
    localStorage.setItem('filteredMovies', JSON.stringify(movies));
  }

  const updateQuery = (query) => {
    setQuery(query);
    localStorage.setItem('query', query);
  }

  const updateShort = (short) => {
    setShort(short);
    localStorage.setItem('short', JSON.stringify(short));
  }

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies') || '[]');
    updateMovies(movies);

    updateFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies') || '[]'));

    updateQuery(localStorage.getItem('query') || '');

    updateShort(JSON.parse(localStorage.getItem('short') || 'false'));

    if (!movies.length) {
      // setIsOpenPreloader(true)
      moviesApi.getMovies()
        .then(movies => {
          updateMovies(movies);
          updateFilteredMovies(movies);
        })
        // .catch((err) => console.log(err))
        // .finally(() => setIsOpenPreloader(false));
    } 
  }, [query]);

  return (
    <section className='movies'>
      <Navigation loggedIn={loggedIn} onMenuPopup={onMenuPopup}/>
      <SearchForm 
        query={query} 
        short={short} 
        updateShort={updateShort} 
        movies={movies}
        updateFilteredMovies = {updateFilteredMovies}
        updateQuery={updateQuery}
      />
      <MoviesCardList 
        filteredMovies={filteredMovies} 
        short={short} 
        onLikeButtonClick={onLikeButtonClick} 
        isSavedMovie={isSavedMovie}
      />
      <Footer />
    </section>
  );
}

export default Movies;