

export function REGISTRAR_CLIENTE (dados) {//Action para registrar
    return {//disparar uma action para o reducer
        type: 'REGISTRAR_CLIENTE',
        dados: dados,
    }
}


export function REGISTRAR_METODO_PAGAMENTO (dados) {//Action para registrar
    return {//disparar uma action para o reducer
        type: 'REGISTRAR_METODO_PAGAMENTO',
        dados: dados,
    }
}