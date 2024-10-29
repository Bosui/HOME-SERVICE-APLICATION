// pages/Home/Home.jsx

import React from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>
        Find Home <span className={styles.spanColor}>Service/Repair</span> <br />
        Near You
      </h1>
      <h2 className={styles.subtitle}>Explore Best Home Service & Repair near you</h2>
      <SearchBar />
      <Container />
      <p className={styles.popularBusinesses}>Popular businesses</p>
      <CardContainer />
    </div>
  );
};

export default Home;
