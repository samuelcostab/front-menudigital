const INITIAL_STATE = {
    products: [],
    total: 0,
}

export default function sectionItem(statePrevios = INITIAL_STATE, action) {
    //statePrevios é o estado antes da modificação 
    //usa os cases para diferencias as actions
    switch (action.type) {

        case 'ADD_PRODUCT':
            const newProduct = action.dados;

            //console.log("NewProduct", newProduct);

            const index = statePrevios.products
                .findIndex(el => el.akey === newProduct.akey);

            if (index !== -1) {
                statePrevios.products[index] = newProduct;
            } else {
                statePrevios.products.push(newProduct);
            }

            //console.log(statePrevios);

            const totalAdd = statePrevios.products.reduce((counter, el) => counter + el.subTotal, 0).toFixed(2);

            return { ...statePrevios, total: totalAdd };

        case 'REMOVE_PRODUCT':
            const product = action.dados;

            const indexII = statePrevios.products
                .findIndex(el => el.akey === product.akey);

            if (indexII !== -1) {
                const productUpdate = statePrevios.products[indexII]
                let result = statePrevios.products.filter(el => {
                    if (el.nameItem !== productUpdate.nameItem) {
                        return el
                    }
                    return null
                });

                statePrevios.products = result;

            }

            const totalRemove = statePrevios.products.reduce((counter, el) => counter + el.subTotal, 0).toFixed(2);

            return { ...statePrevios, total: totalRemove };

        case 'REMOVE_PRODUCT_FROM_CART':
            const productCart = action.dados;

            statePrevios.products //atualiza as qtds e subTotail de cada item removido
                .forEach((el) => {
                    if (el.qtd > 0) {
                        if (el.akey === productCart.nameItem){
                            el.qtd = 0;
                            el.subTotal -= productCart.subTotal;
                            return;
                        }
                    }
                    else {
                        if (el.qtdG > 0) {
                            const akey = `${el.akey} G`
                            if (akey === productCart.nameItem) {
                                el.qtdG = 0;
                                el.subTotal -= productCart.subTotal;
                                return;
                            }
                        }
                        if (el.qtdM > 0) {
                            const akey = `${el.akey} M`
                            if (akey === productCart.nameItem) {
                                el.qtdM = 0;
                                el.subTotal -= productCart.subTotal;
                                return;
                            }
                        }
                        if (el.qtdP > 0) {
                            const akey = `${el.akey} P`
                            if (akey === productCart.nameItem) {
                                el.qtdP = 0;
                                el.subTotal -= productCart.subTotal;
                                return;
                            }
                        }
                    }

                    return -1;
                });


            statePrevios.products = statePrevios.products.filter(el => el.subTotal > 0 );//não considera itens com subTotal igual 0
            
            const totalRemoveII = statePrevios.products.reduce((counter, el) => counter + el.subTotal, 0).toFixed(2);

            return { ...statePrevios, total: totalRemoveII };

        default:
            return statePrevios;
    }
}