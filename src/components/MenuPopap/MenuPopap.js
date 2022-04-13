import { NavLink, Link } from 'react-router-dom';
import icon from '../../images/icon-account.svg';
import './MenuPopap.css';
import '../Navigation/Navigation.css';

function MenuPopap(props) {
  return (
    <section className={`menu-popap ${props.isOpen && `menu-popap_active`}`}>
      <div className='menu-popap__container'>
        <button className='menu-popap__close' onClick={props.onClose} type='button' />

        <ul className='menu-popap__list'>
          <li className="menu-popap__item">
            <NavLink className="menu-popap__link" activeClassName='menu-popap__link_active' exact to="/" onClick={props.onClose}>Главная</NavLink>
          </li>
          <li className="menu-popap__item">
            <NavLink className="menu-popap__link" activeClassName='menu-popap__link_active' to="/movies" onClick={props.onClose}>Фильмы</NavLink>
          </li>
          <li className="menu-popap__item">
            <NavLink className="menu-popap__link" activeClassName='menu-popap__link_active' to="/saved-movies" onClick={props.onClose} >Сохранённые фильмы</NavLink>
          </li>
          <li className="menu-popap__item">
            <Link className='navigation__link-account' to="/profile" onClick={props.onClose}>
              <p className='navigation__account-text'>Аккаунт</p>
              <img className='navigation__icon' src={icon} alt='иконка' />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MenuPopap;