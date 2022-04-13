import React from 'react';
import './Profile.css';

function Profile({ onSignOut, userData }) {
  console.log(userData)
  return (
    <section className="profile">
      <div className="profile__content">
        <h2 className='profile__title'>Привет, {userData.name}!</h2>
        <div className='profile__info profile__info_border'>
          <p className='profile__user'>Имя</p>
          <p className='profile__user profile__user_weight'>{userData.name}</p>
        </div>
        <div className='profile__info'>
          <p className='profile__user'>E-mail</p>
          <p className='profile__user profile__user_weight'>{userData.email}</p>
        </div>
        <div className='profile__edit-container'>
          <button className='profile__edit'>Редактировать</button>
          <button className='profile__edit profile__edit_color' type="button" onClick={onSignOut}>Выйти из аккаунта</button>
        </div>
      </div>
    </section>
  );
}

export default Profile;