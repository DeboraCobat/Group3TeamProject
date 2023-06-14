import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthUserContext';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const { authUser, signOut } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>TC</div>
      <ul className={styles.navList}>
        {authUser && (
          <li className={styles.navItem}>
            <Link href="/article-form">Write a new article</Link>
          </li>
        )}
      </ul>
      <div className={styles.navItems}>
        {authUser && <div className={styles.welcomeMessage}>Welcome {authUser.email}!</div>}
        {authUser && (
          <button className={styles.signOutButton} onClick={signOut}>
            Sign out
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
