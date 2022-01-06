import React from 'react';
import Context from '../../context/Context';
import homeIcon from '../../img/icons/homeIcon.svg';

const Header = () => {
  const pathnameDetails = window.location.pathname.includes('/details');
  const pathname = window.location.pathname;

  return (
    <Context.Consumer>
      {() => (
        <div>
          {pathname !== '/' && <img src={homeIcon} alt="icon-home" className="icon-home" />}
          <h1>Shopping Cart App</h1>
          {pathnameDetails && <button>Carrinho</button>}
        </div>
      )}
    </Context.Consumer>
  );
};

export default Header;
