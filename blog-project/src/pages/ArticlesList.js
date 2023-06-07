//Path: blog-project/src/pages/ArticlesList.js

import React from 'react';
import articles from './ArticleContent';
import SearchBar from './SearchBar';

const ArticleList = () => {
  const handleSearch = (searchQuery) => {
    console.log('Searching...', searchQuery);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p>{article.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;


// import React from 'react';
// import articles from './ArticleContent';
// import SearchBar from '../components/SearchBar';

// const ArticleList = () => {

//   const handleSearch = (searchQuery) => {
//     console.log('Serching...', searchQuery)
//   }

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} />
//       {articles.map(article => (
//         <div key={article.id}>
//           <h2>{article.title}</h2>
//           {article.content.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//           <p>{article.date}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ArticleList;
