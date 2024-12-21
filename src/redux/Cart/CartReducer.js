import { ADD_TO_CART } from "./CartActions"

const initialState = {
    cardProducts : [],
    totalPrice : 0
}

export const CartReducer = (state=initialState, action) => {

    switch(action.type){

        case ADD_TO_CART :
            return {
                ...state,
                cardProducts : [...state.cardProducts, action.productId]
            }


        default :
            return state
    }
}