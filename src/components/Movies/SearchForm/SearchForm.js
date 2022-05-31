import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm({ query, short, updateQuery, movies, updateFilteredMovies, updateShort, setIsOpenPreloader }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpenPreloader(true)
    if (query.length) {
      updateFilteredMovies(
        movies
          .filter(movie => movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) >= 0 )
        )
        setIsOpenPreloader(false)
    } else {
      updateFilteredMovies(movies); 
      setIsOpenPreloader(false)
    }
  }
  
  return (
    <section className="search-form">
      <div className='search-form__content'>
        <form className="search-form__container" onSubmit={handleSubmit}>
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
          <button className='search-form__button' type="submit"/>
        </form>
        <FilterCheckbox short={short} updateShort={updateShort} />
      </div>
    </section>
  ); 
}

export default SearchForm;