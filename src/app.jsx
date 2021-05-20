import React, { useState, useEffect } from 'react';
import './App.css';
import ImageList from './components/Gallery/Gallery';

function App() {
  const [galleries, setGalleries] = useState([]);

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

    fetch('https://api.imgur.com/3/gallery/search/?q=inuyasha', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return setGalleries(result.data);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return <ImageList galleries={galleries} />;
}

export default App;
