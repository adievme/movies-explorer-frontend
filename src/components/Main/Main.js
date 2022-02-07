import React from 'react';
import './Main.css'
import Promo from './Promo/Promo.js';
import NavTab from './NavTab/NavTab.js';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import AboutMe from './AboutMe/AboutMe';

function Main() {
  return (
    <div className='content'>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <Portfolio />
      <AboutMe />
    </div>
  );
}

export default Main