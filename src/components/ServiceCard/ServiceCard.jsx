// components/ServiceCard/ServiceCard.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import Container from '../Container/Container';
import styles from './ServiceCard.module.scss';

const ServiceCard = () => {
  const { category } = useParams(); // Gauti kategoriją iš URL
  const [selectedCategory, setSelectedCategory] = useState(category || 'cleaning'); // Naudoti URL arba pradinį filtrą

  const handleCategorySelect = (category) => {
    console.log(`Selected category: ${category}`);
    setSelectedCategory(category);
  };

  return (
    <div className={styles.serviceCardContainer}>
      {/* Kairėje pusėje - Container su vertikaliu išdėstymu */}
      <div className={styles.leftPanel}>
        <Container onCategorySelect={handleCategorySelect} variant="vertical" />
      </div>

      {/* Dešinėje pusėje - CardContainer su filtravimo parametru */}
      <div className={styles.rightPanel}>
        <CardContainer filter={selectedCategory} />
      </div>
    </div>
  );
};

export default ServiceCard;
