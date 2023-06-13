import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import NavBar from '../components/NavBar';
import ArticlesList from '../components/ArticlesList';
import Footer from '../components/Footer';
import Map from '../components/Map';
import styles from '../styles/LoggedIn.module.css';

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) {
      router.push('/');
    }
  }, [authUser, loading, router]);

  return (
    <div className={styles.container}>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <>
          <NavBar />
          <div className={styles.content}>
            <div className={styles.welcomeMessage}>
              {authUser && <div>Welcome {authUser?.email}!</div>}
            </div>
            <div className={styles.signOutButton}>
            <button className={styles.button} onClick={signOut}>Sign out</button>
            </div>
            <ArticlesList />
            <Map apiKey="AIzaSyAgBm5Qg3xsSoHMIH56hfNsyVvlBoCUh6U" zoom={12} center={{ lat: 37.7749, lng: -122.4194 }} />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default LoggedIn;