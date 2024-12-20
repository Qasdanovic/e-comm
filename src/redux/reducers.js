import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./types"


const initialState = {
    products : [],
    loading : false,
    error : null
}

export const ProductsReducer = (state=initialState, action) => {

    switch(action.type){

        case FETCH_REQUEST:
            return {
                ...state,
                loading : true ,
                error : null
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                loading : false,
                products : action.products
            }

        case FETCH_ERROR:
            return {
                ...state,
                error : action.error
            }

        default:
            return state
    }
}