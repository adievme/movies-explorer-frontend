import React from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

function Profile({ onLogout, onEditButton, onMenuPopup, loggedIn, successfullMessage, setErrorMessage }) {
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setErrorMessage('');
  },[])

  return (
    <>
      <Navigation onMenuPopup={onMenuPopup} loggedIn={loggedIn}/>
      <section className="profile">
        <div className="profile__content">
          <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
          <div className='profile__info profile__info_border'>
            <p className='profile__user'>Имя</p>
            <p className='profile__user profile__user_weight'>{currentUser.name}</p>
          </div>
          <div className='profile__info'>
            <p className='profile__user'>E-mail</p>
            <p className='profile__user profile__user_weight'>{currentUser.email}</p>
          </div>
          <span className='profile__signature'>{successfullMessage}</span>
          <div className='profile__edit-container'>
            <button className='profile__edit' type="button" onClick={onEditButton}>Редактировать</button>
            <button className='profile__edit profile__edit_color' onClick={onLogout} type="button">Выйти из аккаунта</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
    
  );
}

export default Profile;