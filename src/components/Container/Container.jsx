// components/Container/Container.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Container.module.scss';

const Container = ({ onCategorySelect, variant = 'horizontal' }) => {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
    navigate(`/services/${category}`);
  };

  const containerClass = variant === 'horizontal' ? styles.horizontal : styles.vertical;

  const services = [
    { title: 'Cleaning', iconUrl: 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-cleaning-cleaning-icongeek26-linear-colour-icongeek26.png' },
    { title: 'Repair', iconUrl: 'https://img.icons8.com/office/64/maintenance.png' },
    { title: 'Painting', iconUrl: 'https://img.icons8.com/doodle/64/paint-brush--v1.png' },
    { title: 'Shifting', iconUrl: 'https://img.icons8.com/external-filled-outline-design-circle/64/external-Shifting-Truck-home-repair-and-maintenance-filled-outline-design-circle.png' },
    { title: 'Plumbing', iconUrl: 'https://img.icons8.com/plasticine/64/plumbing.png' },
    { title: 'Electric', iconUrl: 'https://img.icons8.com/external-others-phat-plus/64/external-electric-electric-vehicles-color-line-others-phat-plus-6.png' },
  ];

  return (
    <div className={`${styles.container} ${containerClass}`}>
      {services.map((service) => (
        <div key={service.title} className={styles.card} onClick={() => handleCardClick(service.title.toLowerCase())}>
          <img className={styles.icon} src={service.iconUrl} alt={`${service.title} Icon`} />
          <span className={styles.textLabel}>{service.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Container;
