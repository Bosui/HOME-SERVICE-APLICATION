// components/ServiceCard/ServiceCard.jsx

import React from 'react';
import styles from './ServiceCard.module.scss';

const ServiceCard = ({ title, icon, contactPerson = "Tadas Gedvilas", address = "Kauno g. 27, Vilnius" }) => {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.infoContainer}>
        <span className={styles.chip}>cleaning</span>
        
      </div>
    </div>
  );
};

export default ServiceCard;
