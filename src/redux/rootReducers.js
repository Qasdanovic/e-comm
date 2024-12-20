import { combineReducers } from "redux";
import { ProductsReducer } from "./reducers";


export const rootReducers = combineReducers({
    products : ProductsReducer
})