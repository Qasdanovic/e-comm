import { createStore, applyMiddleware } from "redux";
import { rootReducers } from "./rootReducers";
import { thunk }  from 'redux-thunk'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__;

export const store = createStore(rootReducers,applyMiddleware(thunk))