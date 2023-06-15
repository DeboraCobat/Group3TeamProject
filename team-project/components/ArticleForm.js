import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import styles from 'styles/ArticleForm.module.css';
import { useAuth } from '../context/AuthUserContext';
import { useRouter } from 'next/router';


const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { authUser } = useAuth();
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const article = {
      title,
      content,
      author,
      category,
      coverImage,
      createdAt: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, 'articles'), article);
      console.log('Article submitted successfully! Document ID:', docRef.id);

      setTitle('');
      setContent('');
      setAuthor('');
      setCategory('');
      setCoverImage('');
      setSuccessMessage('Article submitted successfully!');
    } catch (error) {
      console.error('Error submitting article:', error);
      setSuccessMessage('Error submitting article. Please try again.');
    }
  };

  if (!authUser) {
    return (
      <p>
        Please{' '}
        <a href="/login" onClick={handleLoginClick}>
          log in
        </a> {' '}
        to access this page.
      </p>
    );
  }

  return (
    <div className={styles['form-wrapper']}>
      <form onSubmit={handleSubmit} className={styles['form-container']}>
        {successMessage && <p>{successMessage}</p>}
        <div className={styles['input-field']}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div className={styles['input-field']}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter article content"
          />
        </div>
        <div className={styles['input-field']}>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author's name"
          />
        </div>
        <div className={styles['input-field']}>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Select a category"
          />
        </div>
        <div className={styles['input-field']}>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="Enter a link to a .jpg"
          />
        </div>
        <button type="submit" className={`${styles.button} button`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
