import React, { useEffect, useState } from 'react';
import './EditProfilePopap.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function EditProfilePopap(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  React.useEffect(() => {
    props.setErrorMessage('')
  },[props.isOpen])

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    props.onUpdateUser({
      name: name,
      email: email
    })
  }

  const [isValidProfile, setIsValidProfile] = React.useState(false);

  React.useEffect(() => {
    if (name !== currentUser.name || email !== currentUser.email) {
      setIsValidProfile(true);
    } else {
      setIsValidProfile(false);
    }
  }, [name, email, currentUser]);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser, props.isOpen]);

  return (
    <section className={`profile-popap ${props.isOpen && `profile-popap_active`}`}>
      <div className="profile-popap__container">
        <h2 className="profile-popap__title">Редактирование</h2>
        <button className="profile-popup__close" onClick={props.onClose} type="button" aria-label="close"></button> 
        <form className='profile-popap__form' onSubmit={handleSubmit}>
          <input 
            className="profile-popap__input" 
            onChange={handleChangeName} 
            value={name || ''} 
            type="text" 
            placeholder="Имя" 
            minLength="2" 
            maxLength="40" 
            required 
          />
          <input 
            className="profile-popap__input" 
            onChange={handleChangeEmail} 
            value={email || ''} 
            type="text" 
            placeholder="Email" 
            minLength="2" 
            maxLength="200" 
            required 
          />
          <span className='profile-popap__error'>{props.errorMessage}</span>

          <button className='profile-popap__submit' disabled={!isValidProfile} type="submit">Сохранить</button>
        </form>
      </div>
    </section>
  )
}

export default EditProfilePopap;