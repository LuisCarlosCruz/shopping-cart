import React from 'react';
import Nav from '../componentes/nav/Nav';
import BuscaItem from '../componentes/buscaItem/BuscaItem';
import SectionItens from '../componentes/sectionItens/SectionItens';

const Home = () => {
  return (
    <div>
      <h1>Shopping Cart App</h1>
      <Nav />
      <BuscaItem />
      <SectionItens />
      {/* Criar o Footer */}
    </div>
  );
};

export default Home;
