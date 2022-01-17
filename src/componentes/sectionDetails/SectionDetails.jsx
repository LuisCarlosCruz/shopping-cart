import React, { useContext } from 'react';
import Context from '../../context/Context';

const SectionDetails = () => {
  const { itemSelecionado } = useContext(Context);
  const {
    thumbnail,
    title,
    condition,
    price,
    shipping: { free_shipping },
    available_quantity,
  } = itemSelecionado;

  return (
    <div>
      <section>
        <div>
          <img src={thumbnail} alt="imagem do produto" />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{condition}</p>
          <div>
            <p>Preço: R$</p>
            <h3>{price}</h3>
            <p>ou 12x s/ juros</p>
          </div>
          <p>{free_shipping && 'Frete grátis'}</p>
          <p>Quantidade disponível: {available_quantity}</p>
          <div>
            <button type="button">Adicionar ao Carrinho</button>
            <br />
            <button type="button">Comprar agora</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionDetails;
