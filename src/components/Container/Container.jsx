// components/Container/Container.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './Container.module.scss';

const Container = () => {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    navigate(`/services/${category}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card} onClick={() => handleCardClick('cleaning')}>
        <ServiceCard 
          title="Cleaning" 
          icon={<img className={styles.icon} src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-cleaning-cleaning-icongeek26-linear-colour-icongeek26.png" alt="Cleaning Icon" />} 
        />
      </div>
      <div className={styles.card} onClick={() => handleCardClick('repair')}>
        <ServiceCard 
          title="Repair" 
          icon={<img className={styles.icon} src="https://img.icons8.com/office/64/maintenance.png" alt="Repair Icon" />} 
        />
      </div>
      <div className={styles.card} onClick={() => handleCardClick('painting')}>
        <ServiceCard 
          title="Painting" 
          icon={<img className={styles.icon} src="https://img.icons8.com/doodle/64/paint-brush--v1.png" alt="Painting Icon" />} 
        />
      </div>
      <div className={styles.card} onClick={() => handleCardClick('shifting')}>
        <ServiceCard 
          title="Shifting" 
          icon={<img className={styles.icon} src="https://img.icons8.com/external-filled-outline-design-circle/64/external-Shifting-Truck-home-repair-and-maintenance-filled-outline-design-circle.png" alt="Shifting Icon" />} 
        />
      </div>
      <div className={styles.card} onClick={() => handleCardClick('plumbing')}>
        <ServiceCard 
          title="Plumbing" 
          icon={<img className={styles.icon} src="https://img.icons8.com/plasticine/64/plumbing.png" alt="Plumbing Icon" />} 
        />
      </div>
      <div className={styles.card} onClick={() => handleCardClick('electric')}>
        <ServiceCard 
          title="Electric" 
          icon={<img className={styles.icon} src="https://img.icons8.com/external-others-phat-plus/64/external-electric-electric-vehicles-color-line-others-phat-plus-6.png" alt="Electric Icon" />} 
        />
      </div>
    </div>
  );
};

export default Container;
