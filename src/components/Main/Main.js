import React from 'react';
import './Main.css'
import Promo from './Promo/Promo.js';
import NavTab from './NavTab/NavTab.js';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import AboutMe from './AboutMe/AboutMe';
import Header from '../Header/Header';

function Main({ loggedIn, onMenuPopap }) {
  return (
    <main className='main'>
      <Header loggedIn={loggedIn} onMenuPopup={onMenuPopap} />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main