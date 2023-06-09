import React from 'react';
import styles from 'styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className={`container ${styles['search-bar']}`}>
      <div className="row">
        <div className="col s12">
          <div className={`input-field ${styles['input-field']}`}>
            <input
              type="text"
              id="search"
              placeholder="Search by title"
              onChange={(e) => onSearch(e.target.value)}
              className={styles['input']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;