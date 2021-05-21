import React from 'react';
import styles from './ImageItem.module.css';

const ImageItem = ({ image, selectedImg, setSelectedImg }) => {
  return (
    image &&
    image.type !== 'video/mp4' && (
      <div
        className={styles.img_wrap}
        onClick={() => {
          setSelectedImg(image.link);
        }}
      >
        {' '}
        <img
          className={styles.image_item}
          src={image.link}
          alt={image.id}
          loading='lazy'
        />
      </div>
    )
  );
};

export default ImageItem;
