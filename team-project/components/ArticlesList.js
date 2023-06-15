import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { fetchData } from '../lib/firebase';
import styles from '../styles/ArticlesList.module.css';
import Pagination from './Pagination';

const ArticlesList = ({ initialArticles }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 2;

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
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

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className={styles['articles-list-container']}>
      <div className={styles['search-bar-container']}>
        <SearchBar onSearch={handleSearch} />
      </div>

      {currentArticles.map((article) => (
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

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={nextPage}
        onPreviousPage={previousPage}
      />
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
