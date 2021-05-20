import React from 'react';
import styles from './Gallery.module.css';
import ImageItem from '../Images/Images';

const Gallery = ({ galleries }) => {
  // console.log('galleries 5: ', galleries);
  // need to grab the "images" property only from the galleries array of objs
  const images = galleries
    .filter((item) => {
      return item['images'] !== undefined;
    })
    .map((item) => {
      return item['images'];
    })
    .flat();

  return (
    <ul className={styles.image_list}>
      {images.map((item) => (
        <ImageItem key={item.id} image={item} />
      ))}
    </ul>
  );
};

export default Gallery;
