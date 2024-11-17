// src/components/SearchBar/SearchBar.tsx

import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <span className={styles.searchIcon}>Q</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;