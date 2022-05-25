// import successfully from '../images/successfully.png';
import error from '../../images/error.png';

import './InfoToolTipPopup.css';

function InfoTooltipPopup(props) {
  const { isOpen, onClose, message } = props;
  return (
    <section className={`popup popup_type_info-tooltip ${isOpen && `popup_active`}`}>
      <div className="popup__container popup__container_padding">
        <button className="popup__close" onClick={onClose} type="button" aria-label="close"></button>
        <img className="popup__image-tooltip" src={error} alt='ошибка' />
        <h2 className="popup__title popup__title_center">{message}</h2>
      </div>
    </section>
  );
}

export default InfoTooltipPopup;

