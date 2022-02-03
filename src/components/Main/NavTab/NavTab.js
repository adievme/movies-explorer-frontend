import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <div className='nav'>
      <ul className='nav__list'>
        <a className='nav__element' href='#'><li>О проекте</li></a>
        <a className='nav__element' href='#'><li>Технологии</li></a>
        <a className='nav__element' href='#'><li>Студент</li></a>
      </ul>
    </div>
  );
}

export default NavTab;