export const ADD_TO_CART = "ADD_TO_CART"
export const DELETE_FROM_CART = "DELETE_FROM_CART"
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY"
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY"

export const DELETE_PRODUCT_IN_CART = "DELETE_PRODUCT_IN_CART"




export const add_to_cart = (prod) => {
    return {
        type : ADD_TO_CART,
        prod
    }
}


export const increment_quantity = (productId) => {
    return {
        type : INCREMENT_QUANTITY,
        productId
    }
}
export const decrement_quantity = (productId) => {
    return {
        type : DECREMENT_QUANTITY,
        productId
    }
}

export const delete_prod_in_cart = (productId) => {
    return {
        type : DELETE_PRODUCT_IN_CART,
        productId
    }
}
