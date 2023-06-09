import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from 'styles/Home.module.css';

const HomePage = () => {
  useEffect(() => {
    import('materialize-css/dist/js/materialize.min.js').then((M) => {
      M.AutoInit();
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Welcome to our Blog</h1>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default HomePage;
