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

            const totalAdd = statePrevios.products.reduce((counter, el) => counter + el.subTotal, 0).toFixed(2);

            return {...statePrevios, total: totalAdd};

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

            return {...statePrevios, total: totalRemove};

        default:
            return statePrevios;
    }
}