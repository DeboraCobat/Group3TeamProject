import React from "react";
import ArticleForm from "pages/components/AddArticleForm";
import NavBar from "pages/components/NavBar";

const ArticleFormPage = () => {
  return (
    <div className="form-container">
      <NavBar />
      <div className="form-container">
        <h3>Let's Create!</h3>
        <p>Fill out the form below to create a new article.</p>
        <ArticleForm />
      </div>
    </div>
  );
};

export default ArticleFormPage;