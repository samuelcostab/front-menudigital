const INITIAL_STATE = {
    products: []
}

export default function sectionItem(statePrevios = INITIAL_STATE, action) {
    //statePrevios é o estado antes da modificação 
    //usa os cases para diferencias as actions
    switch (action.type) {
        case 'ADD_ADITIONALS':
            return [
                //...statePrevios copia todas as informações do statePrevios
                ...statePrevios,
                {
                    aditionals: statePrevios.aditionals.push(action.dados)
                }
            ]
            break;

        case 'REMOVE_ADITIONALS':
            statePrevios.aditionals.pop();//remove ultimo elemento
            return [
                ...statePrevios,
                {
                    aditionals: statePrevios.aditionals
                }
            ]
            break;

        case 'ADD_PRODUCT':
            const newProduct = action.dados;

            const index = statePrevios.products
                .findIndex(el => el.nameItem === newProduct.nameItem);

            if (index !== -1) {

                statePrevios.products[index] = newProduct;
            } else {
                statePrevios.products.push(newProduct);
            }

            console.log("estado", statePrevios);

            return statePrevios

        case 'REMOVE_PRODUCT':
            const product = action.dados;

            const indexII = statePrevios.products
                .findIndex(el =>
                    el.nameItem === product.nameItem);

            if (indexII !== -1) {
                const productUpdate = statePrevios.products[indexII]
                let result = statePrevios.products.filter(el => {
                    if (el.nameItem !== productUpdate.nameItem) {
                        return el
                    }
                });

                statePrevios.products = result;

            }

            console.log(statePrevios);

            return statePrevios

        default:
            return statePrevios;
    }
}