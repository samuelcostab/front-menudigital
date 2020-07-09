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
                .findIndex(el =>
                    el.nameItem === newProduct.nameItem
                    && el.value === newProduct.value);

            if (index !== -1) {
                const productUpdate = statePrevios.products[index]
                statePrevios.products[index] = { ...productUpdate, qtd: productUpdate.qtd + 1 };
            } else {
                statePrevios.products.push({ ...newProduct, qtd: 1 });
            }

            console.log(statePrevios);

            return statePrevios

        case 'REMOVE_PRODUCT':
            const product = action.dados;

            const indexII = statePrevios.products
                                        .findIndex(el =>
                                            el.nameItem === product.nameItem
                                            && el.value === product.value);

            if (indexII !== -1) {
                const productUpdate = statePrevios.products[indexII]
                if( productUpdate.qtd > 1){
                    statePrevios.products[indexII] = { ...productUpdate, qtd: productUpdate.qtd - 1 };
                } else {
                    let result = statePrevios.products.filter(el => { 
                                            if(el.value !== productUpdate.value ){
                                                return el 
                                            } 
                                        });

                    console.log(result)

                    statePrevios.products = result;
                }
            }

            console.log(statePrevios);

            return statePrevios

        default:
            return statePrevios;
    }
}