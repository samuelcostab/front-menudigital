export function ADD_ITEM_IN_LIST(dados) {
  //Action para registrar
  return {
    //disparar uma action para o reducer
    type: "ADD_ITEM_IN_LIST",
    dados: dados,
  };
}

export function ADD_PRODUCT(product) {
  //Action para registrar
  
  return {
    //disparar uma action para o reducer
    type: "ADD_PRODUCT",
    dados: product,
  };
}

export function REMOVE_PRODUCT(product) {
  //Action para registrar
  return {
    //disparar uma action para o reducer
    type: "REMOVE_PRODUCT",
    dados: {
      nameItem: product.nameItem,
      value: product.valueP || product.valueM || product.valueG,
    },
  };
}
