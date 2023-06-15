// Import necessary dependencies
import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

// SearchBar component
const SearchBar = ({ onSearch }) => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handler for input change event
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    // SearchBar form container
    <form onSubmit={handleSubmit} className={styles.searchBarContainer}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search by title"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
