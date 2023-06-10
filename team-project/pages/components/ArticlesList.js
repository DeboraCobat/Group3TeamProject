import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { fetchData } from '/lib/firebase';
import styles from '../../styles/ArticlesList.module.css';

const ArticlesList = ({ initialArticles }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchFirebaseData = async () => {
      const firebaseData = await fetchData();
      setArticles(firebaseData || []);
    };

    fetchFirebaseData();
  }, []);

  const filteredArticles = articles.filter((article) => {
    const title = article.title || '';
    return title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  console.log(filteredArticles);

  return (
    <div className={styles['articles-list-container']}>
      <SearchBar onSearch={handleSearch} />

      {filteredArticles.map((article) => (
        <div className={styles['article-container']} key={article.id}>
          <h2 className={styles['article-title']}>{article.title}</h2>
          {article.coverImage && (
            <div className={styles['article-cover-image-container']}>
              <img
                src={article.coverImage}
                alt={article.title}
                className={styles['article-cover-image']}
              />
            </div>
          )}
          <p className={styles['article-paragraph']}>{article.content}</p>
          <p className={styles['article-author']}>{article.author}</p>
          <p className={styles['article-category']}>{article.category}</p>
          <p className={styles['article-date']}>
            {article.dateCreated?.toDate()?.toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const firebaseData = await fetchData();

  return {
    props: {
      initialArticles: firebaseData,
    },
  };
}

export default ArticlesList;
