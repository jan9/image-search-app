import React, { useRef } from 'react';
import styles from './SearchHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
    <header className={styles.header}>
      <div
        className={styles.title}
        onClick={(event) => (window.location.href = '/')}
      >
        <h1>Image Search App</h1>
      </div>

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
  );
};

export default SearchHeader;
