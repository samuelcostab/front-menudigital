  export function ADD_PRODUCT_CART(products) {
    //Action para registrar
    
    return {
      //disparar uma action para o reducer
      type: "ADD_PRODUCT_CART",
      dados: products,
    };
  }
  
  export function REMOVE_PRODUCT_CART(products) {
    //Action para registrar
    return {
      //disparar uma action para o reducer
      type: "REMOVE_PRODUCT_CART",
      dados: products,
    };
  }