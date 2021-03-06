import React from 'react';
import Nav from '../componentes/nav/Nav';
import BuscaItem from '../componentes/buscaItem/BuscaItem';
import SectionItens from '../componentes/sectionItens/SectionItens';
import Header from '../componentes/header/Header';
import Recomendados from '../componentes/recomendados/Recomendados';
import ListaCategoria from '../componentes/listaCategoria/ListaCategoria';

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <BuscaItem />
      <ListaCategoria />
      {/* Lista de Categoria */}
      <SectionItens />
      {/* sideBar propaganda */}
      <Recomendados />
      {/* Criar o Footer */}
    </div>
  );
};

export default Home;
