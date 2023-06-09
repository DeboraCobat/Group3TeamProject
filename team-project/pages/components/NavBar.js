import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <ul>
        <li>
          <Link href="/logged_in">Home</Link>
        </li>
        <li>
        <Link href="/article-form">Write a New Article</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
