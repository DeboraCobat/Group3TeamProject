import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

import HomePage from './pages/Home';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import NotFound from './pages/NotFound';
// import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <p className="welcome-text">Welcome to your blog</p>
        <p className="description-text">Here you can write about anything you want</p>
        <SearchBar /> {}

        <div id="page-body" className="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ArticlesList" element={<ArticlesList />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
