import React from 'react';
import { Link } from 'react-router-dom';
import NavbarCSS from '../css-modules/Navbar.module.css';

function Navbar() {
  return (
    <nav className={NavbarCSS.flex}>
      <div className={NavbarCSS.logo}>Bookstore CMS</div>
      <ul className={NavbarCSS.navlist}>
        <li>
          <Link className={NavbarCSS.navLink} to="/">Books</Link>
        </li>
        <li>
          <Link className={NavbarCSS.navLink} to="/categories">Categories</Link>
        </li>
      </ul>
      <div className={NavbarCSS.oval}>
        <div className={NavbarCSS.personIcon}></div>
      </div>
    </nav>
  );
}

export default Navbar;
