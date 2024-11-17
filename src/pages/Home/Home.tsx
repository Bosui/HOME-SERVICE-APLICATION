// src/pages/Home/Home.tsx

import React, { useState } from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Funkcija, kurią perduodame Container komponentui
  const handleCategorySelect = (category: string): void => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.homeContainer}>
       
      <h1 className={styles.title}>
        Find Home <span className={styles.spanColor}>Service/Repair</span> <br />
        Near You
      </h1>
      <h2 className={styles.subtitle}>Explore Best Home Service & Repair near you</h2>
      <SearchBar />
      <div className={styles.contentWrapper}> {/* Wrapper apgaubiantis turinį */}
        <Container onCategorySelect={handleCategorySelect} variant="horizontal"/>
        <CardContainer filter={selectedCategory} variant="horizontal" />
      </div>
    </div>
  );
};

export default Home;
