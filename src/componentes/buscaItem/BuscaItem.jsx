import React, { useContext } from 'react';
import Context from '../../store/Context';
import { fetchMercadoLivre } from '../../environments/api/fetchMercadoLivre';

const BuscaItem = () => {
  const { nomeItemBuscado, setNomeItemBuscado, setListaItemBuscado } = useContext(Context);

  const handleOnClick = () => {
    fetchMercadoLivre(nomeItemBuscado, setListaItemBuscado);
  };

  return (
    <div>
      <label htmlFor="buscaItem">
        <input
          type="text"
          onChange={({ target }) => setNomeItemBuscado(target.value)}
          id="buscaItem"
          placeholder=" produto..."
        />
      </label>
      <button type="submit" onClick={handleOnClick}>
        Buscar
      </button>
    </div>
  );
};

export default BuscaItem;
