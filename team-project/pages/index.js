import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from 'styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>TimeCrafter</h1>
      <h3>Your Online Publishing Platform</h3>
      <h6>Create and share your own stories</h6>
      <Link href="/login">Please, get in!</Link>
    </div>
  );
};

export default HomePage;
