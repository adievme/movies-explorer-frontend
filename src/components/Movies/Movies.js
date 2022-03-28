import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from '../Footer/Footer.js';

function Movies() {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  );
}

export default Movies;