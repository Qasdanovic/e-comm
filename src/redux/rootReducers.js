import { combineReducers } from "redux";
import { ProductsReducer } from "./reducers";
import { CartReducer } from "./Cart/CartReducer";


export const rootReducers = combineReducers({
    products : ProductsReducer,
    cart : CartReducer
})