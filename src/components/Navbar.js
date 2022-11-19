import React from 'react';
import { Link } from 'react-router-dom';
import NavbarCSS from '../css-modules/Navbar.module.css';

function Navbar() {
  return (
    <nav className={NavbarCSS.container}>
      <div className={NavbarCSS.logo}>Bookstore CMS</div>
      <Link className={NavbarCSS.navLink} to="/">Books</Link>
      <Link className={NavbarCSS.navLink} to="/categories">Categories</Link>
      {/* <ul className={NavbarCSS.navList}>
        <li className={NavbarCSS.listItem}>
          <Link className={NavbarCSS.navLink} to="/">Books</Link>
        </li>
        <li className={NavbarCSS.listItem}>
          <Link className={NavbarCSS.navLink} to="/categories">Categories</Link>
        </li>
      </ul> */}
      <div className={NavbarCSS.oval}>
        <div className={NavbarCSS.personIcon} />
      </div>
    </nav>
  );
}

export default Navbar;
