import React, { useContext } from 'react';
import Context from '../../context/Context';
import fetchMercadoLivre from '../../services/fetchMercadoLivre';

const BuscaItem = () => {
  const { itemBuscado, setItemBuscado } = useContext(Context);

  const handleOnClick = () => {
    fetchMercadoLivre(itemBuscado);
  };

  return (
    <div>
      <label htmlFor="buscaItem">
        <input
          type="text"
          onChange={({ target }) => setItemBuscado(target.value)}
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
