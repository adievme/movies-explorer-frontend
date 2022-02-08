import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <section className='nav'>
      <ul className='nav__list'>
        <a className='nav__element' href='#about-project'><li>О проекте</li></a>
        <a className='nav__element' href='#techs'><li>Технологии</li></a>
        <a className='nav__element' href='#about-me'><li>Студент</li></a>
      </ul>
    </section>
  );
}

export default NavTab;