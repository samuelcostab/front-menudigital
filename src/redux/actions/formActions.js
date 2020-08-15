/*
export function nameAction (param) {
    return {//disparar uma action para o reducer
        type: '',
        param: param,
    }
}
*/

export function REGISTRAR_CLIENTE (dados) {//Action para registrar
    return {//disparar uma action para o reducer
        type: 'REGISTRAR_CLIENTE',
        dados: dados,
    }
}