import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import Article from './pages/Article';
import ArticlesListPage from './pages/ArticlesList';

// import Home from './components/Home';
// import Blog from './components/Blog';
// import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <p>Welcome to your blog</p>
      <p>Here you can write about anything you want</p>
      <div id="page-body">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles-list" element={<ArticlesListPage />} />
        <Route path="/article/:articleId" element={< Article />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}


export default App;
