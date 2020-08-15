const INITIAL_STATE = { dadosCliente : {}}

export default function formReducer(state = INITIAL_STATE, action){
    //state é o estadoAtual antes da modificação 
    //usa os cases para diferencias as actions
    switch(action.type) {
        case 'REGISTRAR_CLIENTE':
            const dadosCliente = action.dados;

            return {...state, dadosCliente: dadosCliente};
    
        default:
            return state;
    }
}