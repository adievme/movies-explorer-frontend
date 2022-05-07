import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from '../Footer/Footer.js';
import Navigation from "../Navigation/Navigation";

function SavedMovies({ onMenuPopup, loggedIn }) {
  return (
    <section className='saved-movies'>
      <Navigation onMenuPopup={onMenuPopup} loggedIn={loggedIn}/>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  );
}

export default SavedMovies;