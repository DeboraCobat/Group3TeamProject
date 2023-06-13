import React from 'react';
import ArticleForm from "components/ArticleForm"; 
import NavBar from "components/NavBar";
import styles from 'styles/articleForm.module.css';

const ArticleFormPage = () => {
  return (
    <div className="articles-list-container">
      <NavBar />
      <div className="article-container">
        <h3>Let's Create!</h3>
        <p>Fill out the form below to create a new article.</p>
        <ArticleForm /> 
      </div>
    </div>
  );
};

export default ArticleFormPage;
