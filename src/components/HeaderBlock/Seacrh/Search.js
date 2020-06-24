import React from 'react';
import styles from './Search.module.scss';

const Search = (props) => {
  return (
    <div className={styles.input}>
      <input type="search" placeholder='Search...' />
    </div>
  );
};

export default Search;