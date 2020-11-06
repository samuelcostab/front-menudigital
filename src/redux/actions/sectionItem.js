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
      akey: product.akey,
      nameItem: product.nameItem,
      value: product.valueP || product.valueM || product.valueG,
    },
  };
}

export function REMOVE_PRODUCT_FROM_CART(dados) {
  //Action para registrar
  return {
    //disparar uma action para o reducer
    type: "REMOVE_PRODUCT_FROM_CART",
    dados: dados,
  };
}
