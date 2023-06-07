//Path: blog-project/src/pages/Article.js

import React from 'react';
import { useRouter } from 'next/router';
import ArticleContent from '../components/ArticleContent';
import ArticlesList from '../components/ArticlesList';

const Article = () => {
  const router = useRouter();
  const { articleId } = router.query;
  const article = ArticleContent.find((article) => article.id === articleId);

  if (!article) return <ArticlesList />;
  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>Author: {article.author}</p>
      <p>Date Created: {article.dateCreated}</p>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Article;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import ArticleContent from './ArticleContent';
// import ArticlesList from './ArticlesList';

// const Article = () => {
//     const { articleId } = useParams();
//     const article = ArticleContent.find(article => article.id === articleId);

//     if (!article) return <ArticlesList />;
//     return (
//         <>

//         <div className="article">
//             <h1>{article.title}</h1>
//             <p>Author: {article.author}</p>
//             <p>Date Created: {article.dateCreated}</p>
//             {article.content.map((paragraph, key) => (
//                 <p key={key}>{paragraph}</p>
//             ))}
//         </div>
//         </>
//     );
// }

// export default Article;
