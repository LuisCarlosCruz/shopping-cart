import React from 'react';
import Context from '../../context/Context';
import homeIcon from '../../img/icons/homeIcon.svg';

const Header = () => {
  return (
    <Context.Consumer>
      {() => (
        <div>
          <img src={homeIcon} alt="icon-home" className="icon-home" />
          <h1>Shopping Cart App</h1>
        </div>
      )}
    </Context.Consumer>
  );
};

export default Header;
