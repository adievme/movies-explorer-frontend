import React, { useState, useEffect } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from '../Footer/Footer.js';
import Navigation from "../Navigation/Navigation";
import { mainApi } from "../../utils/MainApi";

function SavedMovies({ onMenuPopup, loggedIn, token, savedMovies, setSavedMovies, onDeleteMovie }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [short, setShort] = useState(false);

  const updateSavedMovies = (movies) => {
    mainApi.getMovies(token)
      .then(movies => {
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err))

    localStorage.setItem('savedMovies', JSON.stringify(movies));
  }

  const updateMovies = (movies) => {
    setMovies(movies);
    // localStorage.setItem('movies', JSON.stringify(movies));
  }

  const updateFilteredMovies = (movies) => {
    setFilteredMovies(movies);
    // localStorage.setItem('filteredMovies', JSON.stringify(movies));
  }

  const updateQuery = (query) => {
    setQuery(query);
    localStorage.setItem('queryForSavedMovies', query);
  }

  const updateShort = (short) => {
    setShort(short);
    localStorage.setItem('shortSavedMovies', JSON.stringify(short));
  }

  useEffect(() => {
    updateSavedMovies(JSON.parse(localStorage.getItem('savedMovies') || '[]'));

    updateQuery(localStorage.getItem('queryForSavedMovies') || '');

    updateShort(JSON.parse(localStorage.getItem('shortSavedMovies') || 'false'));
  }, [])

  useEffect(() => {
    
    updateMovies(savedMovies)
    updateFilteredMovies(savedMovies)
  },[savedMovies])

  // console.log(filteredMovies, savedMovies)

  return (
    <section className='saved-movies'>
      <Navigation onMenuPopup={onMenuPopup} loggedIn={loggedIn}/>
      <SearchForm 
        query={query}
        short={short}
        updateQuery={updateQuery}
        updateShort={updateShort}
        updateFilteredMovies={updateFilteredMovies}
        movies={movies}
      />
      <MoviesCardList filteredMovies={filteredMovies} onDeleteMovie={onDeleteMovie} short={short} />
      <Footer />
    </section>
  );
}

export default SavedMovies;