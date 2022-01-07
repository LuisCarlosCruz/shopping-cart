export const fetchMercadoLivre = (nomeItemBuscado, setListaItemBuscado) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${nomeItemBuscado}`;

  const busca = fetch(URL)
    .then((resp) => resp.json())
    .then((data) => setListaItemBuscado(data.results));
  return busca;
};

function embarralharArray(data) {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  // Retornando array com aleatoriedade
  return data.slice(0, 6);
}

export const fetchListaCategorias = (setListaCategoria) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/categories`;

  const busca = fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
      setListaCategoria(data);
    });
  return busca;
};

export const fetchRecomendados = (category_id, setListaItemRecomendados) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${category_id}`;

  const busca = fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
      setListaItemRecomendados(embarralharArray(data.results));
      console.log(data);
    });
  return busca;
};

//
export const fetchCategoriaSelecionada = (category_id, funcaoParam) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${category_id}`;

  const busca = fetch(URL)
    .then((resp) => resp.json())
    .then((data) => funcaoParam(data.results));
  return busca;
};
