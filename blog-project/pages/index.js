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

// import React from 'react';
// import { useRouter } from 'next/router';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import SearchBar from '../components/SearchBar';
// import Home from 'index';
// import Article from '../components/Article';
// import ArticlesList from '../components/ArticlesList';
// import NotFound from '../components/NotFound';

// function App() {
//   const router = useRouter();
//   const { asPath } = router;

//   return (
//     <div className="App">
//       <NavBar />
//       <p className="welcome-text">Welcome to your blog</p>
//       <p className="description-text">Here you can write about anything you want</p>
//       <SearchBar />

//       <div id="page-body" className="page-body">
//         {asPath === '/' && <Home />}
//         {asPath === '/articles' && <ArticlesList />}
//         {asPath.startsWith('/article/') && <Article />}
//         {!asPath.startsWith('/article/') && <NotFound />}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
