import Reducer from './Reducer';
import { createStore, applyMiddleware } from 'redux';


const Store = createStore(Reducer);

export default Store;