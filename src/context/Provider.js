import Context from './Context';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [listaItemBuscado, setlistaItemBuscado] = useState([]);

  const contextValue = {
    listaItemBuscado,
    setlistaItemBuscado,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.element,
};

export default Provider;
