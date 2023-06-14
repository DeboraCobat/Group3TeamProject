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
    router.push('/home_page');
  };

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
        {authUser ? (
          <>
            <div className={styles.welcomeMessage}>Welcome {authUser.email}!</div>
            <button className={styles.signOutButton} onClick={handleSignOut}>
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link href="/login" legacyBehavior>
              <a className={styles.navLink}>Login/Register</a>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
