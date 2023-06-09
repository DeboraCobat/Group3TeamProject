import React from "react";
import ArticleForm from "pages/components/AddArticleForm";
import NavBar from "pages/components/NavBar";

const ArticleFormWithNavbar = () => {
  return (
    <div>
        <NavBar />
        <ArticleForm />
    </div>
  );
};

export default ArticleFormWithNavbar;
