import React, { useContext, useEffect } from 'react';
import Context from '../../store/Context';
import { fetchRecomendados } from '../../environments/api/fetchMercadoLivre';

const Recomendados = () => {
  const {
    itemSelecionado: { category_id },
    listaItemRecomendados,
    setListaItemRecomendados,
    // listaItemBuscado,
  } = useContext(Context);

  useEffect(() => {
    fetchRecomendados(category_id, setListaItemRecomendados);
  }, []);

  return (
    <div>
      <div>
        <h3>Recomendados</h3>
        <section>
          {listaItemRecomendados.map((item) => {
            return (
              <div key={item.id} style={{ width: '100px' }}>
                <img src={item.thumbnail} alt="imagem produto" />
                <p>R$: {item.price}</p>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Recomendados;
