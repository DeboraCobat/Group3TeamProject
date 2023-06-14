import React from 'react';
import NavBar from '../components/NavBar';
import ArticlesList from '../components/ArticlesList';
import Footer from '../components/Footer';
import Map from '../components/Map';
import styles from '../styles/LoggedIn.module.css';
const HomePage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <ArticlesList />
        <Map apiKey="AIzaSyAgBm5Qg3xsSoHMIH56hfNsyVvlBoCUh6U" zoom={12} center={{ lat: 37.7749, lng: -122.4194 }} />
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
