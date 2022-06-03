import React from 'react';
import './Main.css'
import Promo from './Promo/Promo.js';
import NavTab from './NavTab/NavTab.js';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import AboutMe from './AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Main({ loggedIn, onMenuPopup }) {
  return (
    <main className='main'>
      <Header loggedIn={loggedIn} onMenuPopup={onMenuPopup} />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Main