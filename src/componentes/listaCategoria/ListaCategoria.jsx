import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import {
  fetchCategoriaSelecionada,
  fetchListaCategorias,
  fetchRecomendados,
} from '../../services/fetchMercadoLivre';

const ListaCategoria = () => {
  const { listaCategorias, setListaItemBuscado, setListaCategorias, setListaItemRecomendados } =
    useContext(Context);

  useEffect(async () => {
    await fetchListaCategorias(setListaCategorias);
    await fetchRecomendados('MLB5672', setListaItemRecomendados);
  }, []);

  return (
    <div>
      {listaCategorias &&
        listaCategorias.map((item, index) => {
          return (
            <div key={index}>
              <button
                type="button"
                onClick={() => fetchCategoriaSelecionada(item.id, setListaItemBuscado)}>
                {item.name}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ListaCategoria;
