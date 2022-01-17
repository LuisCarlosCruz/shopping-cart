import React from 'react';

const ListaCarrinho = () => {
  return (
    <div style={{ display: 'flex' }}>
      <section>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </section>
      <section>
        <div>
          <h3>Valor Total: R$</h3>
          <button>Comprar Agora</button>
        </div>
      </section>
    </div>
  );
};

export default ListaCarrinho;
