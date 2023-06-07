//Path: blog-project/src/pages/ArticlesList.js
import React from 'react';
import articles from './ArticleContent';

const ArticleList = () => {
  return (
    <div>
      {articles.map(article => (
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
