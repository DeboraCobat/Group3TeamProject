import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from './ArticleContent';
import ArticlesList from './ArticlesList';

const Article = () => {
  const { articleId } = useParams();
  const article = ArticleContent.find(article => article.id === parseInt(articleId));

  if (!article) return <ArticlesList />;
  
  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>Author: {article.author}</p>
      <p>Date Created: {article.dateCreated}</p>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Article;
