import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';  //permite hacer peticiones a api's externas
import  rootReducer from './Reducer/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // esta línea es para poder hacer peticiones a un server
);
export default store;