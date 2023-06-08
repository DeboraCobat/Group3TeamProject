import React, { useState } from 'react';
import SearchBar from './SearchBar';

const ArticlesList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const articles = [
    // Articles data
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {filteredArticles.map((article) => (
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

export default ArticlesList;
