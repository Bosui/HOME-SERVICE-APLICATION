// src/components/ServiceCard/ServiceCard.tsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import Container from '../Container/Container';
import styles from './ServiceCard.module.scss';

// Naudojame Record tipą su 'string' raktais ir reikšmėmis 'string | undefined'
const ServiceCard: React.FC = () => {
  const { category } = useParams<Record<string, string | undefined>>(); // Pakeistas tipas į `Record<string, string | undefined>`
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'cleaning'); // Naudoti URL arba pradinį filtrą

  const handleCategorySelect = (category: string): void => {
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
        <CardContainer filter={selectedCategory} variant="horizontal" />
      </div>
    </div>
  );
};

export default ServiceCard;
