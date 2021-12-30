import Context from './Context';
import React, { useState } from 'react';

const Provider = ({children}) => {

  const [emailIsValid, setEmailIsValid] = useState(false);

  const contextValue = {
		emailIsValid,
		setEmailIsValid
  }

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  )
}

export default Provider
