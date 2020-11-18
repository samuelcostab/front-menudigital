const INITIAL_STATE = {
    products_cart: [],
}

export default function shopingCart(statePrevios = INITIAL_STATE, action) {
    //statePrevios é o estado antes da modificação 
    //usa os cases para diferencias as actions
    switch (action.type) {
       
        case 'ADD_PRODUCT_CART':
            const newProduct = action.dados;
            //console.log("New",newProduct);

            newProduct.forEach( product => {
                const index = statePrevios.products_cart.findIndex(el => el.nameItem === product.nameItem);

                if (index !== -1) {
                    if(product.qtd > 0){//se o produto tem qtd. > 0, ele foi escolhido e deve ser atualizado.
                        statePrevios.products_cart[index] = product;

                    }else{//retorna todos elementos menos o produto com qtd == 0. (retira o produto com qtd == 0)
                        statePrevios.products_cart = statePrevios.products_cart.filter(el => el.nameItem !== product.nameItem);
                    }
                    
                } else {
                    if(product.qtd > 0)
                        statePrevios.products_cart.push(product);
                }
            })

            //console.log("Como ficou",statePrevios.products_cart);


            return {...statePrevios};

        case 'REMOVE_PRODUCT_CART':
            const product = action.dados;

            statePrevios.products_cart = statePrevios.products_cart.filter(el => el.nameItem !== product.nameItem);

            return {...statePrevios};

        default:
            return statePrevios;
    }
}