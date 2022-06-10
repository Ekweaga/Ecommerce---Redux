import React from 'react'
import { legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import {persistStore} from 'redux-persist';
import appReducer from './appReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(appReducer, composeEnhancers);
const persistor = persistStore(store);

export {store, persistor};