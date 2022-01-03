import React from 'react';
import imgPropaganda from '../../img/imgPropaganda.png';
import imgCarrinho from '../../img/imgCarrinho.png';

const Nav = () => {
  const handleOnClick = () => {
    window.location.assign('/login');
  };

  return (
    <div>
      <section>
        <img src={imgPropaganda} alt="img-publicidade" className="img-propaganda-home" />
        <div>
          <a onClick={handleOnClick} target="_blank" rel="noreferrer">
            Login
          </a>
          <img src={imgCarrinho} alt="img-carrinho" className="icone-carrinho" />
        </div>
      </section>
    </div>
  );
};

export default Nav;
