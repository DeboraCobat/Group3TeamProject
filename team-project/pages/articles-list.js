import React from 'react';
import ArticlesList from 'components/ArticlesList';
import NavBar from 'components/NavBar';
import styles from 'styles/ArticlesList.module.css';

const ArticleFormPage = () => {
  return (
    <div className={styles['articles-list-container']}>
      <NavBar />
      <div className={styles['article-container']}>
        <ArticlesList />
      </div>
    </div>
  );
};

export default ArticleFormPage;
