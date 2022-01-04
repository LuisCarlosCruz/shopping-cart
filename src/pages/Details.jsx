import React from 'react';
import Header from '../componentes/header/Header';
import Recomendados from '../componentes/recomendados/Recomendados';
import SectionDetails from '../componentes/sectionDetails/SectionDetails';

const Details = () => {
  return (
    <div>
      <Header />
      <SectionDetails />
      <Recomendados />
    </div>
  );
};

export default Details;
