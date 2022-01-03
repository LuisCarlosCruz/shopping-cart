const fetchMercadoLivre = (itemBuscado) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${itemBuscado}`;

  const busca = fetch(URL)
    .then((resp) => resp.json())
    .then((data) => console.log(data.results));
  return busca;
};

export default fetchMercadoLivre;
