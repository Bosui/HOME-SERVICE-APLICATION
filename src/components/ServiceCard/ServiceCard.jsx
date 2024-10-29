// components/ServiceCard/ServiceCard.jsx

import React from 'react';
import styles from './ServiceCard.module.scss';

const ServiceCard = ({ title, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.textLabel}>{title}</span>
    </div>
  );
};

export default ServiceCard;
