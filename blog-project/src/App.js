import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';

// import Home from './components/Home';
// import Blog from './components/Blog';
// import About from './components/About';
// import Contact from './components/Contact';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Group 3 Blog Project</h1>
      <p>Welcome to your blog</p>
      <p>Here you can write about anything you want</p>
      <div id="page-body">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles-list" element={<ArticlesListPage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}


export default App;
