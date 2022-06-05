import React from 'react'
import {createStore, applyMiddleware, compose} from 'redux'
import {persistStore} from 'redux-persist';
import appReducer from './appReducer'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(appReducer, composeEnhancers);
const persistor = persistStore(store);

export {store, persistor};