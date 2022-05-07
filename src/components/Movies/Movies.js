import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from '../Footer/Footer.js';
import Navigation from "../Navigation/Navigation";

function Movies({ onMenuPopup, loggedIn }) {
  return (
    <section className='movies'>
      <Navigation loggedIn={loggedIn} onMenuPopup={onMenuPopup}/>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  );
}

export default Movies;