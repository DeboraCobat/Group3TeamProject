import Link from 'next/link';
import React from 'react';
import styles from '../styles/HomePageLogged.module.css';
import { useAuth } from '../context/AuthUserContext';

const HomePageLogged = () => {
  const { authUser } = useAuth();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.welcomeMessage}>{`Welcome ${authUser?.email}!`}</span>
      </h1>
      <div className={styles.buttonContainer}>
        <Link href="/articles-list" passHref style={{ textDecoration: 'none' }}>
          <button className={styles.button}>
            See all stories
          </button>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/article-form" passHref style={{ textDecoration: 'none' }}>
          <button className={styles.button}>
            Write a new story
          </button>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/user-profile" style={{ textDecoration: 'none' }}>
          <div>
            <button className={styles.button}>See my Profile</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePageLogged;
