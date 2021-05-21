import React from 'react';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ selectedImg, setSelectedImg }) => {
  window.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    if (event.key === 'Escape') {
      setSelectedImg(null);
    }
  });

  const handleClick = () => {
    setSelectedImg(null);
  };

  return (
    selectedImg && (
      <div className={styles.modal__backdrop}>
        <button className={styles.modal__close} onClick={handleClick}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
        <img
          className={styles.modal__img}
          src={selectedImg}
          alt='selectedImg_fullScreen'
        />
      </div>
    )
  );
};

export default Modal;
