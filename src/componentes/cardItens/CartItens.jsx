import React, { useContext } from 'react';
import Context from '../../context/Context';
import PropTypes from 'prop-types';

const CartItens = () => {
  const { listaItemBuscado, setItemSelecionado } = useContext(Context);

  const handleOnClick = (item) => {
    // window.location.assign('/login'); // Redireciona p/ a pag de detalhes
    setItemSelecionado(item);
  };

  return (
    <div>
      {listaItemBuscado.map((item, index) => (
        <div key={index} onClick={() => handleOnClick(item)}>
          <img src={item.thumbnail} alt="imagem-produto" />
          {/* aplicar hover css na div */}
          <div>
            <p>{item.title}</p>
            <p>R$: {item.price}</p>
            <p>{item.shipping.free_shipping === true ? 'Frete grátis' : null}</p>
            <p>{item.prices.purchase_discounts.length > 0 ? 'tem desconto' : null}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

CartItens.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default CartItens;
