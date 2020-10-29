const INITIAL_STATE = {
    dadosCliente: {},
    dadosPagamento: { selected: "No Dinheiro", value: null },
}

export default function formReducer(state = INITIAL_STATE, action) {
    //state é o estadoAtual antes da modificação 
    //usa os cases para diferencias as actions
    switch (action.type) {
        case 'REGISTRAR_CLIENTE':
            const dadosCliente = action.dados;
            return { ...state, dadosCliente };
        
        case 'REGISTRAR_METODO_PAGAMENTO':
            const dadosPagamento = action.dados;
            return { ...state, dadosPagamento };

        default:
            return state;
    }
}