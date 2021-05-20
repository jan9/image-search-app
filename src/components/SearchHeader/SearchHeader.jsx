import React, { useRef } from 'react';
import styles from './SearchHeader.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    // console.log(value);
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
      <h1 className={styles.title}>Image Search App</h1>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='Search'
        onKeyPress={handleKeyPress}
      />
      <button className={styles.button} type='submit' onClick={handleClick}>
        🔍
      </button>
    </header>
  );
};

export default SearchHeader;
