//arquivo para englobar todos os reducers (pois teram vários)
import { combineReducers } from 'redux';
import detailsItem from './detailsItem';
import sectionItem from './sectionItem';
import formReducer from './formReducer';
import shopingCart from './shopingCart';


export default combineReducers({ //objeto contendo todos os reducers
    detailsItem,
    sectionItem,
    formReducer,
    shopingCart,
})
