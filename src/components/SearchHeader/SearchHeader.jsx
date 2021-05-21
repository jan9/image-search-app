import React, { useRef } from 'react';
import styles from './SearchHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const handleClick = () => {
    handleSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Grid
      container
      direction='column'
      justify='flex-start'
      alignItems='flex-start'
    >
      <header className={styles.header}>
        <h1
          className={styles.title}
          onClick={(event) => (window.location.href = '/')}
        >
          Image Search App
        </h1>
        <div className={styles.input}>
          <input
            ref={inputRef}
            autoFocus
            className={styles.input__field}
            type='search'
            placeholder='Type keyword here'
            onKeyPress={handleKeyPress}
          />
          <span className={styles.input__icon} onClick={handleClick}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
      </header>
    </Grid>
  );
};

export default SearchHeader;
