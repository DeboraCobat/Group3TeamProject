import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import styles from '../styles/ArticlesList.module.css';
import Like from './Like';

const ArticlePage = ({ articleId }) => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, 'articles', articleId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          console.log('No such article!');
        }
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
