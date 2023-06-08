import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

import Home from './Home';
import Article from './Article';
import ArticlesList from './ArticlesList';
import NotFound from './NotFound';
// import Profile from './Profile';

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
            <Route path="/" element={<Home />} />
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
