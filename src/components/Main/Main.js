import React from 'react';
import './Main.css'
  import Promo from './Promo/Promo.js';
  import NavTab from './NavTab/NavTab.js';
  import AboutProject from './AboutProject/AboutProject';

function Main() {
  return (
    <div className='content'>
      <Promo />
      <NavTab />
      <AboutProject />
    </div>
  );
}

export default Main