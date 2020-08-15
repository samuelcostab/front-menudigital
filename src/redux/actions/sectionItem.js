export function ADD_ITEM_IN_LIST (dados) {//Action para registrar
    return {//disparar uma action para o reducer
        type: 'ADD_ITEM_IN_LIST',
        dados: dados,
    }
}

export function ADD_ADITIONALS (value) {//Action para registrar
    return {//disparar uma action para o reducer
        type: 'ADD_ADITIONALS',
        dados: value,
    }
}

export function REMOVE_ADITIONALS (dados) {//Action para registrar
    return {//disparar uma action para o reducer
        type: 'REMOVE_ADITIONALS',
    }
}

export function ADD_PRODUCT (product) {//Action para registrar
    
    return {//disparar uma action para o reducer
        type: 'ADD_PRODUCT',
        dados : product,
    }
}

export function REMOVE_PRODUCT (product) {//Action para registrar
    return {//disparar uma action para o reducer
        type: 'REMOVE_PRODUCT',
        dados: { 
            nameItem: product.nameItem, 
            value: product.valueP || product.valueM || product.valueG,
        }
    }
}

export function ADD_OBSERVATION (observation) {//Action para registrar
    return {//disparar uma action para o reducer
        type: 'ADD_OBSERVATION',
        observation: observation,
    }
}