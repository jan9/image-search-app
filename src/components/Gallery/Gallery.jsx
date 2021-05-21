import React from 'react';
import styles from './Gallery.module.css';
import ImageItem from '../Images/Images';

const Gallery = ({ galleries, selectedImg, setSelectedImg }) => {
  // need to grab the "images" property only from the galleries array of objs

  const images =
    galleries &&
    galleries
      .filter((item) => {
        return item['images'] !== undefined;
      })
      .map((item) => {
        return item['images'];
      })
      .flat();

  return (
    <div className={styles.image_list}>
      {images &&
        images.map((item) => (
          <ImageItem
            key={item.id}
            image={item}
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
          />
        ))}
    </div>
  );
};

export default Gallery;
