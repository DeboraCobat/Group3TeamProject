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
              placeholder="Search"
              onChange={(e) => onSearch(e.target.value)}
              className={styles['input']}
            />
            <label htmlFor="search">
              <h4 className={styles['search-heading']}>Search</h4>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch(searchQuery);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleInputChange}
//         placeholder="Search..."
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchBar;
