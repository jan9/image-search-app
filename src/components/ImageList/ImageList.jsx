import React from 'react';
import styles from './ImageList.module.css';
import ImageItem from '../ImageItem/ImageItem';

// need to grab the "images" property from the array of gallery objs
const ImageList = ({ galleries, selectedImg, setSelectedImg }) => {
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

export default ImageList;
