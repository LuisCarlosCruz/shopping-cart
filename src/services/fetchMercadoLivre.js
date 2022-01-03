const fetchMercadoLivre = (nomeItemBuscado, setListaItemBuscado) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${nomeItemBuscado}`;

  const busca = fetch(URL)
    .then((resp) => resp.json())
    .then((data) => setListaItemBuscado(data.results));
  return busca;
};

export default fetchMercadoLivre;
