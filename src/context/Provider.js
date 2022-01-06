import Context from './Context';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [nomeItemBuscado, setNomeItemBuscado] = useState('');
  const [listaItemBuscado, setListaItemBuscado] = useState([]);
  const [itemSelecionado, setItemSelecionado] = useState({});
  const [listaItemRecomendados, setListaItemRecomendados] = useState([]);

  const contextValue = {
    listaItemBuscado,
    setListaItemBuscado,
    nomeItemBuscado,
    setNomeItemBuscado,
    itemSelecionado,
    setItemSelecionado,
    listaItemRecomendados,
    setListaItemRecomendados,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.element,
};

export default Provider;
