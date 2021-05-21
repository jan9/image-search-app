import React, { useState } from 'react';
import styles from './App.module.css';
import ImageList from './components/Gallery/Gallery';
import SearchHeader from './components/SearchHeader/SearchHeader';
import Modal from './components/Modal/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';

function App({ imgur }) {
  const [loading, setLoading] = useState(false);
  const [galleries, setGalleries] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const NoResultFound = ({ error, errorMsg }) => {
    return error ? (
      <div className={styles.no_data}>
        <p className={styles.msg}>Error: {errorMsg}</p>
      </div>
    ) : (
      <div className={styles.no_data}>
        <p className={styles.msg}>
          No results found. <br />
          Please type a keyword to search 🔎
        </p>
      </div>
    );
  };

  const Loading = () => {
    return (
      <div className={styles.loading_wrap}>
        <p className={styles.msg}>Loading</p>
        <CircularProgress className={styles.loading_wheel} />
      </div>
    );
  };

  const search = (query) => {
    setLoading(true);
    imgur
      .search(query)
      .then((images) => {
        setGalleries(images);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((e) => {
        setError(true);
        setErrorMsg(e.message);
        // console.log(e);
      });
  };

  return (
    <>
      <SearchHeader onSearch={search} />
      {galleries && galleries.length === 0 ? (
        <NoResultFound error={error} errorMsg={errorMsg} />
      ) : loading ? (
        <Loading />
      ) : (
        <>
          <ImageList
            galleries={galleries}
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
          />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </>
      )}
    </>
  );
}

export default App;
