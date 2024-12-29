import ProductCard from "../../components/ProductCard"
import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, DELETE_PRODUCT_IN_CART } from "./CartActions"

const initialState = {
    cardProducts : [],
}

export const CartReducer = (state=initialState, action) => {


    switch(action.type){

        case ADD_TO_CART :
            return {
                ...state,
                cardProducts : [...state.cardProducts, { ...action.prod, quantity : 1, newPrice : action.prod.price}] ,
            }

        case INCREMENT_QUANTITY :
            return {
                ...state ,
                cardProducts : state.cardProducts.map(product =>
                    product.id === action.productId ?
                    {...product, quantity : product.quantity+1, newPrice: product.price * (product.quantity+1)} :
                    product
                )
            }
        case DECREMENT_QUANTITY :
            return {
                ...state ,
                cardProducts : state.cardProducts.map(product => 
                    product.id === action.productId ?
                    {...product, quantity : product.quantity-1, newPrice : product.price * (product.quantity-1)} :
                    product
                )
            }

            case DELETE_PRODUCT_IN_CART :
                return {
                    ...state ,
                    cardProducts : state.cardProducts.filter(
                        product => product.id !== action.productId
                    )
                }

        default :
            return state
    }
}