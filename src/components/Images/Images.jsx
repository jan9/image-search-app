import React from 'react';
import styles from './Images.module.css';

const ImageItem = ({ image }) => {
  console.log('imageitem: ', image);
  return (
    <li>
      {' '}
      <img
        className={styles.image_item}
        src={image.link}
        alt={image.id}
        loading='lazy'
        width='300px'
      />
    </li>
  );
};

export default ImageItem;
