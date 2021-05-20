import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import ImageList from './components/Gallery/Gallery';
import SearchHeader from './components/SearchHeader/SearchHeader';

function App() {
  const [galleries, setGalleries] = useState([]);
  const search = (query) => {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
    );

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(`https://api.imgur.com/3/gallery/search/?q=${query}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return setGalleries(result.data);
      })
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
    );

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://api.imgur.com/3/gallery/search', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return setGalleries(result.data);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <ImageList galleries={galleries} />
    </div>
  );
}

export default App;
