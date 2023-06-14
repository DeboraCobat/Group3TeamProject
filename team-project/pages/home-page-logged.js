import Link from 'next/link';
import React from 'react';
import styles from '../styles/HomePageLogged.module.css';

const HomePageLogged = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to your stories home!!</h1>
      <div>
        <Link href="/articles-list" passHref>
          <button className={styles.button}>
            See all stories
          </button>
        </Link>
      </div>
      <div>
        <Link href="/article-form" passHref>
          <button className={styles.button}>
            Write a new story
          </button>
        </Link>
      </div>
      <div>
        <Link href="/user-profile">
          <div>
            <button className={styles.button}>See my Profile</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePageLogged;