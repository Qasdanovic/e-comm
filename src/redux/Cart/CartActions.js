export const ADD_TO_CART = "ADD_TO_CART"
export const DELETE_FROM_CART = "DELETE_FROM_CART"
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY"
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY"




export const add_to_cart = (prod) => {
    return {
        type : ADD_TO_CART,
        prod
    }
}


export const increment_quantity = () => {
    return {
        type : INCREMENT_QUANTITY
    }
}
export const decrement_quantity = () => {
    return {
        type : DECREMENT_QUANTITY
    }
}
