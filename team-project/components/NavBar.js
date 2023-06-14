import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthUserContext';
import styles from '../styles/NavBar.module.css';
import { useRouter } from 'next/router';

const NavBar = () => {
  const { authUser, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push('/articles-list');
  };  

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/articles-list">Go to all stories!</Link>
        </li>
        {authUser && (
          <li className={styles.navItem}>
            <Link href="/article-form">Write a new story</Link>
          </li>
        )}
        {authUser ? (
          <>
            <li className={styles.navItem}>
              <Link href="/user-profile" legacyBehavior>
                <a className={styles.navLink}>Profile</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <div className={styles.container}>
                <div className={styles.signOutContainer}>
                  <button className={styles.signOutButton} onClick={handleSignOut}>
                    Sign out
                  </button>
                </div>
              </div>
            </li>
          </>
        ) : (
          <li className={styles.navItem}>
            <Link href="/login" legacyBehavior>
              <a className={styles.navLink}>Login/Register</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
