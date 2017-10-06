import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import moduleReducers from '../reducers'

export default function configureStore() {

    let store = false
    const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    store = createStore(
        moduleReducers,
        composeEnhancers(
            applyMiddleware(
                createLogger(),
                thunkMiddleware
            )
        )
    )
    

    return store
}
