//arquivo para englobar todos os reducers (pois teram vários)
import { combineReducers } from 'redux';
import formReducer from './formReducer';

export default combineReducers({ //objeto contendo todos os reducers
    formReducer,
})
