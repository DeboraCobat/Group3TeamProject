import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/new-article-form">Add a new article</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;