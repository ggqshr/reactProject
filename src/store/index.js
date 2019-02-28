import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

const SagaMiddleware = createSagaMiddleware()

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(SagaMiddleware),
);
const store = createStore(
    reducer,enhancer
);
SagaMiddleware.run(todoSagas)
export default store;