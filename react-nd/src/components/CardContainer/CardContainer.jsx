// components/CardContainer/CardContainer.jsx

import React from 'react';
import styles from './CardContainer.module.scss';

const CardContainer = ({ filter, variant = 'horizontal' }) => {
  // Pavyzdiniai kortelių duomenys
  const cards = [
    {
      id: 1,
      image: 'https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg',
      category: 'cleaning',
      title: 'Išsivalyk pats',
      contactPerson: 'Tadas Gedvilas',
      address: 'Kauno g. 27, Vilnius',
    },
    {
      id: 2,
      image: 'https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners.jpg',
      category: 'cleaning',
      title: 'UAB Valymas',
      contactPerson: 'Tadas Gedvilas',
      address: 'Kauno g. 27, Vilnius',
    },
    {
      id: 3,
      image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/08/featured_image_what_size_moving_truck_do_you_need.jpeg.jpg',
      category: 'shifting',
      title: 'Moki veži',
      contactPerson: 'Raimondas Butauskas',
      address: 'Kauno g. 27, Vilnius',
    },
    {
      id: 4,
      image: 'https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/kh-qualified-vs-unqualified-electrical-workers_feat.jpg',
      category: 'electric',
      title: 'Elektrikas į namus',
      contactPerson: 'Ramunė Butauskienė',
      address: 'Kauno g. 27, Vilnius',
    },
  ];

  // Filtruojame korteles pagal perduotą `filter` vertę
  const filteredCards = cards.filter((card) => card.category === filter || !filter);

  // Pritaikome variantą stiliaus klasėje
  const containerClass = variant === 'horizontal' ? styles.horizontal : styles.vertical;
    
  return (
    <div className={`${styles.cardContainer} ${containerClass} ${variant === 'horizontal' ? styles.horizontal : styles.vertical}`}>
      {filteredCards.length > 0 ? (
        filteredCards.map((card) => (
          <div key={card.id} className={styles.card}>
            <img src={card.image} alt={card.title} className={styles.cardImage} />
            <h3>{card.title}</h3>
            <p>{card.contactPerson}</p>
            <p>{card.address}</p>
          </div>
        ))
      ) : (
        <p>No cards available</p>
      )}
    </div>
  );
};

export default CardContainer;
