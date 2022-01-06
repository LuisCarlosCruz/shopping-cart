import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import { fetchMercadoLivreCategoria } from '../../services/fetchMercadoLivre';

const Recomendados = () => {
  const {
    itemSelecionado: { category_id },
    listaItemRecomendados,
    setListaItemRecomendados,
    listaItemBuscado,
  } = useContext(Context);

  const listaSeisItensRecomendados = listaItemRecomendados.slice(0, 6);

  useEffect(() => {
    fetchMercadoLivreCategoria(category_id, setListaItemRecomendados);
  }, []);

  return (
    <div>
      {listaItemBuscado.length !== 0 && (
        <div>
          <h3>Recomendados</h3>
          <section>
            {listaSeisItensRecomendados.map((item) => {
              return (
                <div key={item.id} style={{ width: '100px' }}>
                  <img src={item.thumbnail} alt="imagem produto" />
                  <p>R$: {item.price}</p>
                </div>
              );
            })}
          </section>
        </div>
      )}
    </div>
  );
};

export default Recomendados;
