import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY } from "./CartActions"

const initialState = {
    cardProducts : [],
}

export const CartReducer = (state=initialState, action) => {


    switch(action.type){

        case ADD_TO_CART :
            return {
                ...state,
                cardProducts : [...state.cardProducts, { ...action.prod, quantity : 1}] ,
            }

        case INCREMENT_QUANTITY :
            return {
                ...state ,
                quantity : state.quantity+=1 ,
                
            }
        case DECREMENT_QUANTITY :
            return {
                ...state ,
                quantity : state.quantity-=1
            }

        


        default :
            return state
    }
}