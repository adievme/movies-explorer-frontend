import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search-form">
      <div className='search-form__content'>
        <form className="search-form__container">
          <input className="search-form__input" placeholder="Фильм" required/>
          <button className='search-form__button'/>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  ); 
}

export default SearchForm;