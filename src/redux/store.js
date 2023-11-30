import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleWare = [thunk]

if (process.env.NODE_ENV !== 'production') {
    // middleWare.push(createLogger())
}

export const store = createStore(
    reducers,
    applyMiddleware(...middleWare)
)