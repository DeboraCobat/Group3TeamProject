import ArticlePage from 'components/ArticlePage';
import React from 'react';
import NavBar from 'components/NavBar';

const Article = ({ articleId }) => {
  return (
    <div>
      <NavBar />
      <h1>Here is the full story ...</h1>
      <ArticlePage articleId={articleId} />
    </div>
  );
};

export default Article;
