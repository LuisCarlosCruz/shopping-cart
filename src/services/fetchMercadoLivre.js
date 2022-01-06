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

export const fetchMercadoLivreCategoria = (category_id, setListaItemRecomendados) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${category_id}`;

  const busca = fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
      setListaItemRecomendados(embarralharArray(data.results));
    });
  return busca;
};
