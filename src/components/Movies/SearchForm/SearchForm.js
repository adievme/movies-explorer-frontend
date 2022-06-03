import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import { moviesApi } from '../../../utils/MoviesApi';
import { mainApi } from '../../../utils/MainApi';
import { CurrentUserContext } from '../../../context/CurrentUserContext';

function SearchForm({ 
  query, 
  short,
  movies, 
  updateQuery, 
  updateFilteredMovies, 
  updateShort,
  setIsOpenPreloader, 
  isSavedPage
  }) {
    const token = localStorage.getItem('token');
    const currentUser = React.useContext(CurrentUserContext);

    const handleSubmit = (event) => {
      event.preventDefault();
      setIsOpenPreloader(true)
      moviesApi.getMovies()
        .then(movies => {
          if (query.length) {
            updateFilteredMovies(
              movies
                .filter(movie => movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) >= 0 )
              )        
          } else {
            updateFilteredMovies(movies); 
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsOpenPreloader(false))
      
    }

    const handleSearchSavedMovies = (event) => {
      event.preventDefault();
      setIsOpenPreloader(true)
      mainApi
        .getMovies(token)
        .then((savedMovies) => {
          const moviesThisUser = savedMovies.filter(movie => movie.owner === currentUser._id);
          if (query.length) {
            updateFilteredMovies(
              moviesThisUser
                .filter(movie => movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) >= 0 )
              )        
          } else {
            updateFilteredMovies(movies); 
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsOpenPreloader(false))
    }
  
  return (
    <section className="search-form">
      <div className='search-form__content'>
        <form className="search-form__container" onSubmit={isSavedPage ? handleSearchSavedMovies : handleSubmit}>
          <input 
            className="search-form__input" 
            placeholder="Фильм" 
            minLength="0"
            maxLength="20"
            value={query || ''}
            onChange={e => {
              updateQuery(e.target.value)
            }}
            />
          <button className='search-form__button' type="submit" />
        </form>
        <FilterCheckbox short={short} updateShort={updateShort} />
      </div>
    </section>
  ); 
}

export default SearchForm;