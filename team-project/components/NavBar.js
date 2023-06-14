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

  const logoLink = authUser ? '/home-page-logged' : '/';

  const isActivePage = (page) => {
    return router.pathname === page ? styles.selected : '';
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href={logoLink} legacyBehavior>
            <div className={styles.logoContainer}>
              <img src="/logo.png" alt="Logo" className={styles.logo} />
            </div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/articles-list">Read all stories!</Link>
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
