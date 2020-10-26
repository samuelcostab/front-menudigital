export function ADD_ITEM_IN_LIST (dados) {//Action para registrar
    return {//disparar uma action para o reducer
        type: 'ADD_ITEM_IN_LIST',
        dados: dados,
    }
}