export default function detailsItem(statePrevios = [], action){
    //statePrevios é o estadoAtual antes da modificação 
    //usa os cases para diferencias as actions
    switch(action.type) {
        case 'ADD_ITEM_IN_LIST':
            return [
                //...statePrevios copia todas as informações do statePrevios
                ...statePrevios, 
                { 
                    dados: action.dados 
                } 
            ]
        case 'OTHER':
            break;

        default:
            return statePrevios;
    }
}