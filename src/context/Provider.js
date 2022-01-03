import Context from './Context';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [itemBuscado, setItemBuscado] = useState([]);

  const contextValue = {
    itemBuscado,
    setItemBuscado,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.element,
};

export default Provider;
