import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import ImageList from './components/Gallery/Gallery';
import SearchHeader from './components/SearchHeader/SearchHeader';

function App({ imgur }) {
  const [galleries, setGalleries] = useState([]);
  const search = (query) => {
    imgur
      .search(query) //
      .then((images) => setGalleries(images));
  };

  useEffect(() => {
    imgur
      .search('') //
      .then((images) => setGalleries(images));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <ImageList galleries={galleries} />
    </div>
  );
}

export default App;
