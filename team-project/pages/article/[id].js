import ArticlePage from 'components/ArticlePage';
import React from 'react';

const Article = ({ articleId }) => {
  return (
    <div>
      <div>Full Article</div>
      <ArticlePage articleId={articleId} />
    </div>
  );
};

export default Article;
