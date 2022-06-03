import React, { useState, useEffect } from 'react';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from '../Footer/Footer.js';
import { moviesApi } from '../../utils/MoviesApi';
import Header from '../Header/Header';

function Movies({ onMenuPopup, loggedIn, onLikeButtonClick, isSavedMovie, isOpenPreloader, setIsOpenPreloader }) {
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
      moviesApi.getMovies()
        .then(movies => {
          updateMovies(movies);
          updateFilteredMovies(movies);
        })
        .catch((err) => console.log(err))
    } 
  }, [query]);

  return (
    <section className='movies'>
      <Header loggedIn={loggedIn} onMenuPopup={onMenuPopup} isOpenPreloader={isOpenPreloader} />
      <SearchForm 
        query={query} 
        short={short} 
        updateShort={updateShort} 
        movies={movies}
        updateFilteredMovies = {updateFilteredMovies}
        filteredMovies={filteredMovies}
        updateQuery={updateQuery}
        setIsOpenPreloader={setIsOpenPreloader}
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