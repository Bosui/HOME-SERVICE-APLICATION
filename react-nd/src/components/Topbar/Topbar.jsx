// components/Topbar/Topbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './Topbar.module.scss';

const Topbar = () => (
  <nav className={styles.topbar}>
    <div className={styles.logoContainer}>
      <img src={logo} alt="LogoIpsum" className={styles.logo} />
    </div>
    <ul className={styles.navList}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/about">About Us</Link></li>
    </ul>
    <div className={styles.right}>
      <Link to="/signup" className={styles.loginButton}>Login / Sign Up</Link>
    </div>
  </nav>
);

export default Topbar;
