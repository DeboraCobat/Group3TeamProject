import React from 'react';
import styles from '../styles/Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onNextPage, onPreviousPage }) => {
  return (
    <div className={styles['pagination-container']}>
      <button onClick={onPreviousPage} disabled={currentPage === 1} className={`${styles['btn']} btn`}>
        Previous
      </button>
      <span className={styles['page-info']}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className={`${styles['btn']} btn`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
