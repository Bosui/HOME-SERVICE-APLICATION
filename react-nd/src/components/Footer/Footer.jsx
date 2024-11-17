// components/Footer/Footer.jsx

import React from 'react';
import styles from './Footer.module.scss';

// Puslapio apačios komponentas, kuriame gali būti informacija apie svetainę ar autorių teisės
const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; 2024 My Application. All rights reserved. Bosas</p>
  </footer>
);

export default Footer;
