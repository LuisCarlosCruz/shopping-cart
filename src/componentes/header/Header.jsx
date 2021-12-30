import React from 'react'
import Context from '../../context/Context';

const Header = () => {
  return (
    <Context.Consumer>
      {
        (value) => (
          <div>
            <h4>{`Meu carro é um ${value.emailIsValid}`}</h4>
          </div>
        )
      }
    </Context.Consumer>
  )
}

export default Header;
