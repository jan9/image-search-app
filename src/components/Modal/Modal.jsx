import React from 'react';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = () => {
    setSelectedImg(null);
  };
  return (
    selectedImg && (
      <div className={styles.modal__backdrop}>
        <button className={styles.modal__close} onClick={handleClick}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
        <img className={styles.modal__img} src={selectedImg} alt='enlarged' />
      </div>
    )
  );
};

export default Modal;
