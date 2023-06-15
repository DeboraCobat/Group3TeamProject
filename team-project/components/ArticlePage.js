import React, { useState, useEffect } from 'react';
import { fetchArticleById } from '../lib/firebase';

const ArticlePage = ({ articleId }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleData = await fetchArticleById(articleId);
        setArticle(articleData);
      } catch (error) {
        console.log('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>Article ID: {article.id}</h2>
      <p>Article Title: {article.title}</p>
      <p>Article Content: {article.content}</p>
      <p>Article Author: {article.author}</p>
      <p>Article Category: {article.category}</p>
      <p>Article Cover Image: {article.coverImage}</p>
      <p>Article Created At: {article.createdAt}</p>
    </div>
  );
};

export default ArticlePage;
