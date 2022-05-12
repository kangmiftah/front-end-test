
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducers, logger, monitorReducerEnhancer } from './';
import thunkMiddleware from 'redux-thunk'


const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);
export default createStore(rootReducers, middlewareEnhancer );
