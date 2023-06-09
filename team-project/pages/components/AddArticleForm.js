import React, { useState } from 'react';
import { db } from 'lib/firebase';
import styles from 'styles/articleForm.module.css';


const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const article = {
      title,
      content,
      createdAt: new Date(),
    };

    try {
      await db.collection('articles').add(article);
      console.log('Article submitted successfully!');

      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error submitting article:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['form-container']}>
      <div className={styles['input-field']}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter article title"
        />
      </div>
      <div className={styles['input-field']}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter article content"
        />
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
  );  
};

export default ArticleForm;
