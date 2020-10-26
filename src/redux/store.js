//resposável pro inicializar o Redux
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore( reducers ) //passa por parâmetro a lista de Reducers

export default store;