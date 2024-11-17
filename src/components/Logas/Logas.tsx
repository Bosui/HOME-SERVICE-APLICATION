// src/components/Logas/Logas.tsx

import React, { useEffect } from 'react';

const Logas: React.FC = () => {
  useEffect(() => {
    console.log('Logas component is working!');
  }, []);

  return null; // Komponentas tiesiog atspausdina žinutę į konsolę
};

export default Logas;
