//path: blog-project/src/components/NavBar.js

import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/ArticlesList">Articles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
