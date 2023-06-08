import React from 'react';
import NavBar from './components/NavBar';
import ArticlesList from './components/ArticlesList';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Welcome to our Blog!</h1>
      <ArticlesList />
      <Footer />
    </div>
  );
};

export default Home;