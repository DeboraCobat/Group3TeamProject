//Path: blog-project/src/components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  console.log(searchQuery);

  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button type="submit" onClick={() => onSearch(searchQuery)}>Search</button>
    </>
  );
};

export default SearchBar;

// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   console.log(searchQuery);

//   return (
//     <>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleInputChange}
//         placeholder="Search..."
//       />
//       <button type="submit" onClick={() => onSearch(searchQuery)}>Search</button>
//     </>
//   );
// };

// export default SearchBar;
