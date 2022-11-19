import React from 'react';
import { Link } from 'react-router-dom';
import NavbarCSS from '../css-modules/Navbar.module.css';
import '../css-modules/UserIcon.css';

function Navbar() {
  return (
    <header className={NavbarCSS.navbar}>
      <nav className={NavbarCSS.navContainer}>
        <div className={NavbarCSS.logo}>Bookstore CMS</div>
        <Link className={NavbarCSS.navLink} to="/">Books</Link>
        <Link className={NavbarCSS.navLink} to="/categories">Categories</Link>
        <span className="material-symbols-rounded user-icon" />
      </nav>
    </header>
  );
}

export default Navbar;
