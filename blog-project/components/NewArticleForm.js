import React, { useState } from 'react';
import db from '../../firebaseConfig.js'

const NewArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePostArticle = async (e) => {
    e.preventDefault();

    try {
      const newArticle = {
        title,
        content: content.split('\n'),
        dateCreated: new Date().toISOString().split('T')[0],
      };

      await db.collection('articles').add(newArticle);

      setTitle('');
      setContent('');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Create New Article</h2>
      <form onSubmit={handlePostArticle}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Post Article</button>
      </form>
    </div>
  );
};

export default NewArticleForm;