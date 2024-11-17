// src/components/Container/Container.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Container.module.scss';

// Tipų apibrėžimas `Container` komponentui
interface ContainerProps {
  onCategorySelect?: (category: string) => void;  // Funkcija, kuri priima kategoriją kaip string ir neturi grąžinamos reikšmės
  variant?: 'horizontal' | 'vertical'; // Galimos reikšmės 'horizontal' arba 'vertical'
}

const Container: React.FC<ContainerProps> = ({ onCategorySelect, variant = 'horizontal' }) => {
  const navigate = useNavigate();
// console.log(`Container variant A horizontal: ${variant}`);  // Patikrinkite variant prop'ą 
  // Funkcija, kurią kviečiame paspaudus ant paslaugos kortelės
  const handleCardClick = (category: string): void => {
    if (onCategorySelect) {
      onCategorySelect(category);
    } else {
      console.log(`Selected category: ${category}`);  // Jei nėra funkcijos, tiesiog išvedame reikšmę į konsolę
    }
    navigate(`/services/${category}`);
  };

  // Pasirenkame klasę priklausomai nuo varianto ('horizontal' arba 'vertical')
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
