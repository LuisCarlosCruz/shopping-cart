const adicionaItemCarrinho = (itemSelecionado, listaCarrinho) => {
  listaCarrinho.push(itemSelecionado);
  console.log(Array.from(listaCarrinho));
};

export default adicionaItemCarrinho;
