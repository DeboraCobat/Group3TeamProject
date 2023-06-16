import { useState, useEffect } from 'react';
import { fetchArticleById } from '../lib/firebase';
import styles from '../styles/ArticlesList.module.css';
import Like from './Like';
import {db} from '../lib/firebase';

const ArticlePage = ({ articleId }) => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleData = await fetchArticleById(articleId);
        setArticle(articleData);
      } catch (error) {
        console.error('Error retrieving article:', error);
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
    return <div>Article not found!</div>;
  }

  return (
    <div className={styles['articles-list-container']}>
      <div className={styles['article-container']} key={article.id}>
        <h2 className={styles['article-title']}>
          <a href={`/articles/${article.id}`}>{article.title}</a>
        </h2>
        <p className={styles['article-content']}>
          {article.content && article.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </p>
        <p className={styles['article-author']}>Author: {article.author}</p>
        <p className={styles['article-category']}>Category: {article.category}</p>
        <p className={styles['article-date']}> Created in:
          {article.dateCreated?.toDate()?.toLocaleDateString()}
        </p>
        <Like />
      </div>
    </div>
  );
};

export default ArticlePage;
