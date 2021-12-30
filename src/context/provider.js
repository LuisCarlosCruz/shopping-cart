import React, { useState } from 'react';
import Context from './Context';

import React from 'react'

const provider = ({children}) => {

  const contextValue = {
    
  }

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  )
}

export default provider
