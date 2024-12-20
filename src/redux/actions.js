import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./types"


export const fetch_request = () => {
    return {
        type : FETCH_REQUEST
    }
}
export const fetch_success = (products) => {
    return {
        type : FETCH_SUCCESS,
        products : products
    }
}
export const fetch_error = (error) => {
    return {
        type : FETCH_ERROR,
        error : error
    }
}


