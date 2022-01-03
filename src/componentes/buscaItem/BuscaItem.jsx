import React, { useContext } from 'react';
import Context from '../../context/Context';
import fetchMercadoLivre from '../../services/fetchMercadoLivre';

const BuscaItem = () => {
  const { listaItemBuscado, setlistaItemBuscado } = useContext(Context);

  const handleOnClick = () => {
    fetchMercadoLivre(listaItemBuscado);
  };

  return (
    <div>
      <label htmlFor="buscaItem">
        <input
          type="text"
          onChange={({ target }) => setlistaItemBuscado(target.value)}
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
